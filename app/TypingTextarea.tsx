"use client";
import React, { useState, useEffect, forwardRef } from "react";
import Typist from "react-typist";

type TypingTextareaProps = {
	value: string;
	className?: string;
	readOnly?: boolean;
	rows?: number;
};

const TypingTextarea = forwardRef((props, ref) => {
	const { value, children, ...rest } = props;
	const [content, setContent] = useState(value);

	useEffect(() => {
		setContent(value);
	}, [value]);

	return (
		<div className="w-full border rounded resize-none" ref={ref} {...rest}>
			<Typist key={content} cursor={{ hideWhenDone: true }}>
				{content}
			</Typist>
		</div>
	);
});

export default TypingTextarea;
