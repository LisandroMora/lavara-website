import { useEffect, useState } from "react";
import {
	AiOutlineCheckCircle,
	AiOutlineCloseCircle,
	AiOutlineInfoCircle,
} from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { OpacityBg } from "./style";

const icons = {
	success: {
		icon: <AiOutlineCheckCircle className='icon icon-success' />,
		color: "#28a745",
	},
	info: {
		icon: <AiOutlineInfoCircle className='icon icon-info' />,
		color: "#55b9ea",
	},
	warning: {
		icon: <RiErrorWarningLine className='icon icon-warning' />,
		color: "#DBB243",
	},
	error: {
		icon: <AiOutlineCloseCircle className='icon icon-error' />,
		color: "#ff5964",
	},
};

function AlertMessage({ title, message, floating, icon, timeOut, opacity }) {
	const [active, setActive] = useState(true);

	useEffect(() => {
		if (!timeOut) return;
		const timer = setTimeout(() => {
			setActive(false);
		}, timeOut);
		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeOut]);

	if (!active) return null;

	return (
		<OpacityBg color={icons[icon].color} opacity={opacity} floating={floating}>
			<div className='card-message'>
				<div className='icon-box'>{icons[icon].icon}</div>
				{title && <p className='title'>{title}</p>}
				<p className='message'>{message}</p>
			</div>
		</OpacityBg>
	);
}

export default AlertMessage;
