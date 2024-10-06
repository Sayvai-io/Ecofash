"use client";

import { useEffect, useState } from 'react';
import { supabase } from "../../supabase_config/supabaseClient";

// Define the Member interface
interface Member {
    profile_image: string; // Changed from imgSrc to profile_image
    name: string;
    role: string; // Changed from title to role
    profile_content: string; // Changed from description to profile_content
}

const TeamMember = ({ profile_image, name, role, profile_content }) => (
    <div className="flex flex-col items-center bg-white p-10">
        <img src={profile_image} alt={name} className="mb-2 px-6" />
        <h2 className="mt-4 text-3xl text-gray-700 font-bold">{name}</h2>
        <p className="text-center font-semibold text-[#609641] mt-4 text-2xl">{role}</p>
        <p className="mt-5 text-center text-xl text-gray-500">{profile_content}</p>
    </div>
);

const Teams = () => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const { data, error } = await supabase
                    .from('teams') // Replace with your actual table name
                    .select('*');

                if (error) throw error;

                setMembers(data);
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <>
            <div className="w-full h-96 bg-[#609641] items-center justify-center -mt-10">
                <p className="pt-12 text-6xl font-bold text-center text-white">
                    Meet The Team <span className="block">Our Professionals</span>
                </p>
            </div>
            <div className="flex space-x-10 px-20 -mt-30">
                {members.map((member: Member, index) => (
                    <TeamMember key={index} profile_image={member.profile_image} name={member.name} role={member.role} profile_content={member.profile_content} />
                ))}
            </div>
        </>
    );
};

export default Teams;