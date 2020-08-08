import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';



function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


   async function searchTeachers(e: FormEvent) {
        e.preventDefault();

    const response = await api.get('classes', {
        params: {
            subject,
            week_day,
            time,
        }
    });

    setTeachers(response.data);
}

    
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Find the perfect teacher">
				<form id="search-teachers" onSubmit={searchTeachers}>
				<Select 
                        name="subject" 
                        label="Subject" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)
                        }}
                        options={[
                           { value: 'Architecture', label: 'Architecture' },
                           { value: 'Art & Culture', label: 'Art & Culture' },
                           { value: 'Biology & Life Sciences', label: 'Biology & Life Sciences' },
                           { value: 'Business & Management', label: 'Business & Management' },
                           { value: 'Chemistry', label: 'Chemistry' },
                           { value: 'Communication', label: 'Communication' },
                           { value: 'Computer Science', label: 'Computer Science' },
                           { value: 'Data Analysis & Statistics', label: 'Data Analysis & Statistics' },
                           { value: 'Design', label: 'Design' },
                           { value: 'Economics & Finance', label: 'Economics & Finance' },
                           { value: 'Education', label: 'Education' },
                           { value: 'Electronics', label: 'Electronics' },
                           { value: 'Energy & Earth Sciences', label: 'Energy & Earth Sciences' },
                           { value: 'Engineering', label: 'Engineering' },
                           { value: 'Environmental Studies', label: 'Environmental Studies' },
                           { value: 'Ethics', label: 'Ethics' },
                           { value: 'Food & Nutrition', label: 'Food & Nutrition' },
                           { value: 'Health & Safety', label: 'Health & Safety' },
                           { value: 'History', label: 'History' },
                           { value: 'Humanities', label: 'Humanities' },
                           { value: 'Language', label: 'Language' },
                           { value: 'Law', label: 'Law' },
                           { value: 'Literature', label: 'Literature' },
                           { value: 'Math', label: 'Math' },
                           { value: 'Medicine', label: 'Medicine' },
                           { value: 'Music', label: 'Music' },
                           { value: 'Philanthropy', label: 'Philanthropy' },
                           { value: 'Philosophy & Ethics', label: 'Philosophy & Ethics' },
                           { value: 'Physics', label: 'Physics' },
                           { value: 'Science', label: 'Science' },
                           { value: 'Social Sciences', label: 'Social Sciences' }
                        ]}
                    />
					<Select 
                        name="week_day" 
                        label="Day of the week" 
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        options={[
                           { value: '0', label: 'Sunday' },
                           { value: '1', label: 'Monday' },
                           { value: '2', label: 'Tuesday' },
                           { value: '3', label: 'Wednesday' },
                           { value: '4', label: 'Thursday' },
                           { value: '5', label: 'Friday' },
                           { value: '6', label: 'Saturday' }                           
                        ]}
                    />
                    <Input 
                    type="time" 
                    name="time" 
                    label="Time"
                    value={time}
                    onChange={(e) => {setTime(e.target.value)}}
                     />
                     <button type="submit">
                         Search
                     </button>
				</form>
			</PageHeader>

			<main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
			</main>
		</div>
	)
 }

export default TeacherList;