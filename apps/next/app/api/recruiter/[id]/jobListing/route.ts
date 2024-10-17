import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import JobListing from 'models/job-listing'
import validateTokenHandler from 'middleware/validateTokenHandler'
import { CustomRequest } from 'lib/definitions' // Import your custom request definitions

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Validate JWT token
    console.log(req as CustomRequest)
    // const validationResponse = await validateTokenHandler(req)
    // if (validationResponse) return validationResponse

    // // Check if the user role is 'recruiter'
    // if ((req as CustomRequest)?.user?.role !== 'recruiter') {
    //   return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    // }

    // Get the recruiter id from the URL and verify if the user matches the ID
    const { id } = params
    // if ((req as CustomRequest)?.user?.id !== id) {
    //   return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    // }

    // Connect to the database
    await db.dbConnect()

    // Fetch job listings for the specific recruiter
    const jobListings = await JobListing.find({ recruiter: id }).sort({ postedDate: 'desc' })

    return NextResponse.json(jobListings, { status: 200 })
  } catch (err) {
    console.error('Error fetching job listings:', err)
    return NextResponse.json({ msg: 'Internal Server Error', error: err }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Validate JWT token
    const validationResponse = await validateTokenHandler(req)
    if (validationResponse) return validationResponse

    // Check if the user role is 'recruiter'
    if ((req as CustomRequest)?.user?.role !== 'recruiter') {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    } else {
      console.log('recruiter verified')
    }

    // Get the recruiter id from the URL and verify if the user matches the ID
    const { id } = params
    if ((req as CustomRequest)?.user?.id !== id) {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    } else {
      console.log('recruiter authorized')
    }

    // Parse the request body
    const body = await req.json()
    console.log(body)
    const { title, company, location, employmentType, description, salaryRange, requirements } =
      body

    // Validate required fields
    if (!title || !company || !location || !employmentType || !description || !requirements) {
      return NextResponse.json({ msg: 'Missing required fields' }, { status: 400 })
    }

    // Connect to the database
    await db.dbConnect()
    console.log('db connected')

    // Create the new job listing
    const newJobListing = await JobListing.create({
      title,
      company,
      location,
      employmentType,
      description,
      salaryRange: salaryRange || null,
      requirements,
      recruiter: id, // Recruiter ID from the URL
    })

    console.log('Job listing created successfully')
    return NextResponse.json({ msg: newJobListing }, { status: 201 })
  } catch (err) {
    console.error('Error creating job listing:', err)
    return NextResponse.json({ msg: 'Internal Server Error', error: err }, { status: 500 })
  }
}
