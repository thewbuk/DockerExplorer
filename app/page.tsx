"use client";
import { useState } from "react";
import React from "react";
import Typist from "react-typist";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { dockerCommands } from "./dockerCommands";
import TypingTextarea from "./TypingTextarea";
import Link from "next/link";
export default function Home() {
	const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [darkMode, setDarkMode] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleCommandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCommand(e.target.value === "" ? null : e.target.value);
		setSelectedOption(null);
	};

	const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(e.target.value === "" ? null : e.target.value);
	};

	const selectedCommandIndex =
		selectedCommand !== null ? parseInt(selectedCommand) : -1;
	const commandOptions =
		selectedCommandIndex >= 0
			? dockerCommands[selectedCommandIndex].options
			: [];

	const copyToClipboard = () => {
		navigator.clipboard.writeText(
			`${dockerCommands[selectedCommandIndex].command} ${
				selectedOption !== null
					? commandOptions[parseInt(selectedOption)].name
					: ""
			}`
		);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const bgClass = darkMode ? "bg-gray-800" : "bg-gray-100";
	const textClass = darkMode ? "text-gray-100" : "text-gray-800";
	const headerFooterClass = darkMode ? "bg-gray-900" : "bg-blue-500";

	return (
		<div className={`min-h-screen flex flex-col ${bgClass} `}>
			<header className={`p-4 ${headerFooterClass} ${textClass}`}>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">
						<Typist cursor={{ hideWhenDone: true }}>Docker Explorer</Typist>
					</h1>
					<button onClick={toggleDarkMode} className="focus:outline-none">
						{darkMode ? "☀️" : "🌙"}
					</button>
				</div>
			</header>
			<main className={`container flex-grow px-4 py-10 mx-auto ${bgClass}`}>
				<div className="w-full max-w-xl mx-auto">
					<label
						htmlFor="command"
						className={`block mb-2 text-lg font-extrabold ${textClass}`}
					>
						Choose a command:
					</label>
					<select
						id="command"
						className="w-full p-2 border rounded"
						onChange={handleCommandChange}
						defaultValue=""
					>
						<option value="" disabled className="text-blue-500">
							Choose a command...
						</option>
						{dockerCommands.map((cmd, index) => (
							<option
								key={index}
								value={index.toString()}
								className="text-black"
							>
								{cmd.command}
							</option>
						))}
					</select>

					{selectedCommand !== null && commandOptions.length > 0 && (
						<>
							<label
								htmlFor="option"
								className={`block mb-2 text-lg font-extrabold ${textClass}`}
							>
								Choose an option:
							</label>
							<select
								id="option"
								className="w-full p-2 border rounded"
								onChange={handleOptionChange}
								defaultValue=""
							>
								<option value="" disabled className="text-black">
									Choose an option...
								</option>
								{commandOptions.map((opt, index) => (
									<option
										key={index}
										value={index.toString()}
										className="text-black"
									>
										{opt.name}
									</option>
								))}
							</select>
						</>
					)}

					{selectedCommand !== null && (
						<div className="mt-4">
							<h2 className="mb-2 text-xl font-semibold text-blue-500">
								{dockerCommands[selectedCommandIndex].command}
							</h2>
							<p className={`mb-2 ${textClass}`}>
								{dockerCommands[selectedCommandIndex].description}
							</p>
							<pre
								className={`p-2 text-center text-blue-500 bg-gray-100 rounded border-solid border-2 shadow-sm`}
							>
								{dockerCommands[selectedCommandIndex].usage}
							</pre>
						</div>
					)}

					{selectedOption !== null && (
						<div className="mt-4">
							<h2 className={`mb-2 text-xl font-semibold ${textClass}`}>
								{commandOptions[parseInt(selectedOption)].name}
							</h2>
							<p className={`mb-2 ${textClass}`}>
								{commandOptions[parseInt(selectedOption)].description}
							</p>
						</div>
					)}
					{selectedCommand !== null && (
						<div className="relative mt-4">
							<label className={`block mb-2 ${textClass}`}>
								Selected Command:
							</label>
							<div className="flex">
								<TypingTextarea
									className={`w-full p-2 border rounded resize-none ${textClass}`}
									rows={3}
									value={`${dockerCommands[selectedCommandIndex].command} ${
										selectedOption !== null
											? commandOptions[parseInt(selectedOption)].name
											: ""
									}`}
								/>
								<button
									className="focus:outline-none"
									onClick={copyToClipboard}
								>
									<ClipboardIcon className={`w-6 h-6 ${textClass}`} />
								</button>
								{copied && (
									<div className="absolute right-0 p-2 text-sm text-white bg-green-500 rounded top-16">
										Command Copied
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</main>
			<footer
				className={`p-4 ${headerFooterClass} ${textClass} flex space-x-4 justify-center`}
			>
				<div>
					<p className="text-sm text-center">
						Docker Explorer &copy; {new Date().getFullYear()}
					</p>
				</div>

				<div>
					<Link href="https://thewb.uk/">
						<p className="text-sm text-center hover:underline">
							Made with ❤ by thewb
						</p>
					</Link>
				</div>
				<div>
					<Link href="https://github.com/thewbuk/DockerExplorer">
						<CodeBracketSquareIcon className="w-6 h-6" />
					</Link>
				</div>
			</footer>
		</div>
	);
}
