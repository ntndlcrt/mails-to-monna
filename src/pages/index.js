import { useState } from 'react';

import { Content, Date } from '@/components/Mail';

export default function Home() {
	const [mailPacoId, setMailPacoId] = useState(1);
	const [mailMonnaId, setMailMonnaId] = useState(2);

	const handlePacoClick = (mailId) => {
		setMailPacoId(mailId);
	};

	const handleMonnaClick = (mailId) => {
		setMailMonnaId(mailId);
	};

	return (
		<div className="mails">
			<div className="paco">
				<div className="mail">
					<div className="mail__header">
						<div className="mail__header__to">
							To : paco27@hotmail.com
						</div>
						<div className="mail__header__from">
							From : monnaww@aol.com
						</div>
					</div>
					<div className="mail__content">
						<Content id={mailPacoId} clickEvent={handlePacoClick} />
					</div>
					<div className="mail__date">
						<Date id={mailPacoId} />
					</div>
				</div>
			</div>
			<div className="monna">
				<div className="mail">
					<div className="mail__header">
						<div className="mail__header__to">
							To : monnaww@aol.com
						</div>
						<div className="mail__header__from">
							From : paco27@hotmail.com
						</div>
					</div>
					<div className="mail__content">
						<Content
							id={mailMonnaId}
							clickEvent={handleMonnaClick}
						/>
					</div>
					<div className="mail__date">
						<Date id={mailMonnaId} />
					</div>
				</div>
			</div>
		</div>
	);
}
