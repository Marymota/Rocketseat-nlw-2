import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';



function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');    

    const [scheduleItems, setScheduleItems ] = useState ([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });
        
        setScheduleItems(updateScheduleItems);
    }

        function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            
            history.push('/');
            alert('Registered successfully!');
        }).catch(() => {
            alert('Unsuccessful registration attempt!');
        })
    }

    

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Kickstart your teacher career today!"
                description="The first step is to fill and submit this registration form"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Your info</legend>

                    <Input 
                        name="name" 
                        label="Full Name" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value) }}
                    />

                    <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar}
                        onChange={(e) => {setAvatar(e.target.value) }} 
                    />

                    <Input 
                        name="whatsapp" 
                        label="WhatsApp" 
                        value={whatsapp}
                        onChange={(e) => {setWhatsapp(e.target.value) }}
                    />

                    <Textarea 
                        name="bio" 
                        label="Biography"
                        value={bio}
                        onChange={(e) => {setBio(e.target.value) }}
                    />
                </fieldset>

                <fieldset>
                    <legend>Class Info</legend>
                    
                    <Select 
                        name="subject" 
                        label="Subject"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value); }}
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

                    <Input 
                        name="cost" 
                        label="Hour cost" 
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Schedule
                        <button type="button" onClick={addNewScheduleItem}>
                            + New time slot
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Day of the week" 
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    name="from" 
                                    label="From" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                    
                                <Input 
                                    name="to" 
                                    label="To" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />

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
                    <button type="submit"> 
                    Save
                    </button>
                </footer>
                </form>
            </main>
		</div>
    )  
}

export default TeacherForm;