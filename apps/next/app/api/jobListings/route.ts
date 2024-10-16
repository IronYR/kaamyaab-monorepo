import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import JobListing from 'models/job-listing'
export async function GET(req: NextRequest) {
  try {
    await db.dbConnect()
    const allJobListings = await JobListing.find({})
    if (!allJobListings || allJobListings.length === 0) {
      return NextResponse.json({ msg: 'No listings found' }, { status: 404 })
    }

    return NextResponse.json({ jobListings: allJobListings }, { status: 200 })
  } catch (err) {
    console.error('Error fetching all job listings:', err)
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 })
  }
}
