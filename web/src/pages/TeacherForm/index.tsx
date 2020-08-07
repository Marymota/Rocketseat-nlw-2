import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';



function TeacherForm() {
    const [scheduleItems, setScheduleItems ] = useState ([
        { week_day: 0, from: '', until: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', until: '' }
        ]);
        }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Kickstart your teacher career today!"
            description="The first step is to fill and submit this registration form">
            </PageHeader>

            <main>
                <fieldset>
                    <legend>Your info</legend>

                    <Input name="name" label="Full Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biography"></Textarea>
                </fieldset>

                <fieldset>
                    <legend>Class Info</legend>
                    
                    <Select 
                        name="subject" 
                        label="Subject" 
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

                    <Input name="cost" label="Hour cost" />
                </fieldset>

                <fieldset>
                    <legend>
                        Schedule
                        <button type="button" onClick={addNewScheduleItem}>
                            + New time slot
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="scheduleItem">
                                <Select 
                                    name="week_day" 
                                    label="Day of the week" 
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
                                <Input name="from" label="From" type="time"></Input>
                                    <Input name="until" label="Until" type="time" ></Input>
                            </div>
                                );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important advise"/>
                        Important! <br />
                        Fill all the fields
                    </p>
                    <button type="button"> 
                    Save
                    </button>
                </footer>
            </main>
		</div>
    )  
}

export default TeacherForm;