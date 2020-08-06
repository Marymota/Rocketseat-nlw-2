import React from 'react'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';

import './styles.css';



function TeacherList(){
	return(
		<div id="page-teacher-list" className="container">
			<PageHeader title="Find the perfect teacher">
				<form id="search-teachers">
					<Input name="subject" label="Subject" />
					<Input name="week_day" label="Day of the week" />
					<Input type="time" name="time" label="Time" />
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>


		</div>
	)
}

export default TeacherList;