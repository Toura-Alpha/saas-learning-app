"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'; 
import React, { useState } from 'react'
import { Select, SelectTrigger } from './ui/select';
import { SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select';
import { subjects } from '@/constants';

const SubjectFilter = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [subject, setSubject] = useState('');
        

    let newUrl = '';
    if(subject === "All"){
        newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["subject"],
        });
    }else{
        newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "subject",
            value: subject,
        });
    }
    router.push(newUrl);
    
  return (
    <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className='input capitalize'>
            <SelectValue placeholder/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='all'>All subject</SelectItem>
            {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                    {subject}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  )
}

export default SubjectFilter
