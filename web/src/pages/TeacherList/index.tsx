import React from 'react'

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList(){
	return(
		<div id="page-teacher-list" className="container">
			<PageHeader title="Find the perfect teacher">
				<form id="search-teachers">
					<div className="input-block">
						<label htmlFor="subject">Subject</label>
						<input type="text" id="subject" />
					</div>

					<div className="input-block">
						<label htmlFor="week">Week day</label>
						<input type="text" id="week" />
					</div>

					<div className="input-block">
						<label htmlFor="time">Hour</label>
						<input type="text" id="time" />
					</div>
				</form>
			</PageHeader>

			
		</div>
	)
}

export default TeacherList;