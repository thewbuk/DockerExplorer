"use client";
import { useState } from "react";
import React from "react";
import Typist from "react-typist";
import { ClipboardIcon } from "@heroicons/react/24/solid";
const dockerCommands = [
	{
		command: "docker build",
		description: "Build a Docker image from a Dockerfile.",
		usage: "docker build [options] PATH",
		options: [
			{
				name: "-t, --tag",
				description: "Name and optionally a tag in the name:tag format",
			},
			{
				name: "--no-cache",
				description: "Do not use cache when building the image",
			},
			{
				name: "-f, --file",
				description: 'Name of the Dockerfile (Default is "PATH/Dockerfile")',
			},
			// ... add more options for 'docker build'
		],
	},
	{
		command: "docker run",
		description: "Run a command in a new container.",
		usage: "docker run [options] IMAGE [command] [args...]",
		options: [
			{
				name: "--rm",
				description: "Automatically remove the container when it exits.",
			},
			{
				name: "-d, --detach",
				description: "Run container in the background, print container ID.",
			},
			{
				name: "-it",
				description: "Run container in interactive mode with a pseudo-TTY.",
			},
			{
				name: "-p, --publish",
				description: "Publish a container's port(s) to the host.",
			},
			{
				name: "--name",
				description: "Assign a name to the container.",
			},
			// ... add more options for 'docker run'
		],
	},
	{
		command: "docker ps",
		description: "List containers.",
		usage: "docker ps [options]",
		options: [
			{
				name: "-a, --all",
				description: "Show all containers (default shows just running)",
			},
			{
				name: "--no-trunc",
				description: "Don't truncate output.",
			},
			{
				name: "-q, --quiet",
				description: "Only display container IDs.",
			},
			// ... add more options for 'docker ps'
		],
	},
	{
		command: "docker pull",
		description: "Pull an image or a repository from a registry.",
		usage: "docker pull [options] NAME[:TAG|@DIGEST]",
		options: [
			{
				name: "--all-tags, -a",
				description: "Download all tagged images in the repository.",
			},
			// ... add more options for 'docker pull'
		],
	},
	{
		command: "docker push",
		description: "Push an image or a repository to a registry.",
		usage: "docker push [options] NAME[:TAG]",
		options: [],
	},
	{
		command: "docker images",
		description: "List images.",
		usage: "docker images [options] [REPOSITORY[:TAG]]",
		options: [
			{
				name: "-a, --all",
				description: "Show all images (default hides intermediate images)",
			},
			{
				name: "--no-trunc",
				description: "Don't truncate output.",
			},
			{
				name: "-q, --quiet",
				description: "Only show numeric IDs.",
			},
			// ... add more options for 'docker images'
		],
	},
	{
		command: "docker rmi",
		description: "Remove one or more images.",
		usage: "docker rmi [options] IMAGE [IMAGE...]",
		options: [
			{
				name: "-f, --force",
				description: "Force removal of the image.",
			},
			{
				name: "--no-prune",
				description: "Do not delete untagged parents.",
			},
		],
	},
	{
		command: "docker exec",
		description: "Run a command in a running container.",
		usage: "docker exec [options] CONTAINER COMMAND [args...]",
		options: [
			{
				name: "-d, --detach",
				description: "Detached mode: run command in the background.",
			},
			{
				name: "-i, --interactive",
				description: "Keep STDIN open even if not attached.",
			},
			{
				name: "-t, --tty",
				description: "Allocate a pseudo-TTY.",
			},
			// ... add more options for 'docker exec'
		],
	},
	{
		command: "docker logs",
		description: "Fetch the logs of a container.",
		usage: "docker logs [options] CONTAINER",
		options: [
			{
				name: "--details",
				description: "Show extra details provided to logs.",
			},
			{
				name: "-f, --follow",
				description: "Follow log output.",
			},
			{
				name: "--since",
				description:
					"Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes).",
			},
			{
				name: "-t, --timestamps",
				description: "Show timestamps.",
			},
			// ... add more options for 'docker logs'
		],
	},
	{
		command: "docker stop",
		description: "Stop one or more running containers.",
		usage: "docker stop [options] CONTAINER [CONTAINER...]",
		options: [
			{
				name: "-t, --time",
				description: "Seconds to wait for stop before killing it (default 10).",
			},
		],
	},
	{
		command: "docker rm",
		description: "Remove one or more containers.",
		usage: "docker rm [options] CONTAINER [CONTAINER...]",
		options: [
			{
				name: "-f, --force",
				description: "Force the removal of a running container (uses SIGKILL).",
			},
			{
				name: "-l, --link",
				description: "Remove the specified link.",
			},
			{
				name: "-v, --volumes",
				description:
					"Remove the anonymous volumes associated with the container.",
			},
			// ... add more options for 'docker rm'
		],
	},
	{
		command: "docker volume",
		description: "Manage volumes.",
		usage: "docker volume COMMAND",
		options: [
			// This command has subcommands like 'create', 'inspect', 'ls', 'prune', and 'rm'.
			// You can add options for each subcommand if needed.
		],
	},
	{
		command: "docker network",
		description: "Manage networks.",
		usage: "docker network COMMAND",
		options: [
			// This command has subcommands like 'create', 'connect', 'disconnect', 'inspect', 'ls', 'prune', and 'rm'.
			// You can add options for each subcommand if needed.
		],
	},
	{
		command: "docker-compose",
		description: "Define and run multi-container applications with Docker.",
		usage: "docker-compose [options] [COMMAND] [args...]",
	},
	{
		command: "docker cp",
		description:
			"Copy files/folders between a container and the local filesystem.",
		usage: "docker cp [options] CONTAINER:SRC_PATH DEST_PATH|-",
		options: [
			{
				name: "-a, --archive",
				description: "Archive mode (copy all uid/gid information).",
			},
			{
				name: "-L, --follow-link",
				description: "Always follow symbol link in SRC_PATH.",
			},
			// ... add more options for 'docker cp'
		],
	},
	{
		command: "docker port",
		description: "List port mappings or a specific mapping for the container.",
		usage: "docker port CONTAINER [PRIVATE_PORT[/PROTO]]",
		options: [],
	},
	{
		command: "docker inspect",
		description: "Return low-level information on Docker objects.",
		usage: "docker inspect [options] NAME|ID [NAME|ID...]",
		options: [
			{
				name: "-f, --format",
				description: "Format the output using the given Go template.",
			},
			{
				name: "--size",
				description: "Display total file sizes if the type is container.",
			},
			// ... add more options for 'docker inspect'
		],
	},
	{
		command: "docker tag",
		description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE.",
		usage: "docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]",
		options: [],
	},
	{
		command: "docker search",
		description: "Search the Docker Hub for images.",
		usage: "docker search [options] TERM",
		options: [
			{
				name: "--filter, -f",
				description: "Filter output based on conditions provided.",
			},
			{
				name: "--format",
				description: "Pretty-print search using a Go template.",
			},
			{
				name: "--limit",
				description: "Max number of search results (default 25).",
			},
			{
				name: "--no-trunc",
				description: "Don't truncate output.",
			},
			// ... add more options for 'docker search'
		],
	},
	// ... add more Docker commands and options as needed
];
export default function Home() {
	const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [darkMode, setDarkMode] = useState(false);

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
							<label
								htmlFor="selected-command"
								className={`block mb-2 ${textClass}`}
							>
								Selected Command:
							</label>
							<div className="flex">
								<textarea
									id="selected-command"
									className="w-full p-2 text-black border border-2 border-solid rounded shadow-sm resize-none"
									rows={3}
									readOnly
									value={`${dockerCommands[selectedCommandIndex].command} ${
										selectedOption !== null
											? commandOptions[parseInt(selectedOption)].name
											: ""
									}`}
								/>
								<button
									className={`right-0 p-2 focus:outline-none ${textClass}`}
									onClick={copyToClipboard}
								>
									<ClipboardIcon className="w-6 h-6" />
								</button>
							</div>
						</div>
					)}
				</div>
			</main>
			<footer className={`p-4 ${headerFooterClass} ${textClass}`}>
				<p className="text-sm text-center">
					Docker Explorer &copy; {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	);
}
