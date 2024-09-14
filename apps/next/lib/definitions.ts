export type Student = {
    _id:string,
    name: string;
    password: string;
    email: string;
    university: string;
   
  };
  
  export type Recruiter = {
    _id:string,
    name: string;
    password: string;
    email: string;
    company: string;
  };
  
  export type Post = {
    _id:string,
    content: string;
    user: string;
  };
  
  export type JobListing = {
    _id:string,
    content: string;
    recruiter: string;
  };
  
import { DefaultUser } from "next-auth";

// User type for NextAuth
export type User = DefaultUser & {
  _id: string;
  name: string;
  email: string;
  role: 'student'|'recruiter'
};

import { NextRequest } from 'next/server';
export interface CustomRequest extends NextRequest {
  user?: {
    
    email: string;
    id:string;
    role:string;
  };
}