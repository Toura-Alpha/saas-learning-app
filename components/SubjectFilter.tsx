"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';
import { subjects } from '@/constants';

const SubjectFilter = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [subject, setSubject] = useState('');

    useEffect(() => {
        let newUrl = '';
        if (subject === "All") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        if (newUrl) {
            router.push(newUrl);
        }
    }, [subject, searchParams, router]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='all'>All subject</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className='capitalize'>
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SubjectFilter
