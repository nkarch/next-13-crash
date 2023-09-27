"use client";
import { useState, useEffect } from "react";

import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch("/api/courses");
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        };
        fetchCourses();
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div>
            <h1>This is a Next.js 13 Website 🏆</h1>
            <p>It is the result of following a Traversy tutorial on Next.js 13</p>
            <h2>Filter this list of Traversy courses with the search form:</h2>

            <CourseSearch
                getSearchResults={(results) => {
                    setCourses(results);
                }}
            />
            <Courses courses={courses} />
        </div>
    );
};
export default HomePage;
