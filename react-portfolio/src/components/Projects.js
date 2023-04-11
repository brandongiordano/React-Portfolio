import React from 'react';
import { data } from "../data/projects.js";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

const Projects = () => {

    const projects = data;

    return (
        <div name="projects" className="bg-[#003049] flex flex-col items-center p-4 w-full md:h-screen">
            <div className="mb-2 mt-12 text-center">
               <h1 className='text-5xl py-1 text-white font-bold inline border-b-4 border-[#d62828]'>Projects</h1>
               <p className='text-lg text-white'>
                Take a look at my projects
               </p>
            </div>
            <div className='flex flex-col gap-8 p-10 xl:flex-row'>
            <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Candice Wu
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="candice wu"
            className="border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </CardBody>
      </Card>
            </div>
        </div>
    )
}

export default Projects;