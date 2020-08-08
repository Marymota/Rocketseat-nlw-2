import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
    return (
        <article className="teacher-item">
					<header>
						<img src="https://avatars3.githubusercontent.com/u/20130249?s=460&u=e7c5caa7bc0b9709fd9ee7b7b956a7c20738e66a&v=4" alt="portrait"/>
						<div>
							<strong>Márcia Mota</strong>
							<span>Graphic Design</span>
						</div>
					</header>

					<p>
						Curious, energic and creative.
						<br /><br />
						Love to see ideas grow and florish from concept to pieces of art and functionality.
						Learn the best design processes and tools to achieve your most ambitious dreams.
					</p>

					<footer>
						<p>Preço/hora
						<strong>€ 20,00</strong>
						</p>
						<button type="button">
							<img src={whatsappIcon} alt="Whatsapp"/>
							Contact me
						</button>
					</footer>
				</article>
    )
}

export default TeacherItem;