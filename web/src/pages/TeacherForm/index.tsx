import React from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Kickstart your teacher career today!"
            description="The first step is to fill and submit this registration form"
            />

            <main>
                <fieldset>
                    <legend>Your info</legend>

                    <Input name="name" label="Full Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                </fieldset>

                <fieldset>
                    <legend>Class Info</legend>
                    
                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Hour cost" />
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