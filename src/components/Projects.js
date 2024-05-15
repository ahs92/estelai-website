import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="p-8 bg-white">
            <h2 className="text-3xl mb-4">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border">Project 1: AI-Powered Chatbot for Customer Service</div>
                <div className="p-4 border">Project 2: Data Visualization Dashboard for Sales Data</div>
                <div className="p-4 border">Project 3: Predictive Analytics Model for Marketing</div>
            </div>
        </section>
    );
};

export default Projects;