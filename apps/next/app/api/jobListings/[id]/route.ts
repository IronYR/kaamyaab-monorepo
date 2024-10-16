import db from 'lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
import JobListing from 'models/job-listing';
import validateTokenHandler from 'middleware/validateTokenHandler';
import { CustomRequest } from 'lib/definitions';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.dbConnect();

    const { id } = params;

    // Find the job listing by ID
    const jobListing = await JobListing.findById(id);

    if (!jobListing) {
      return NextResponse.json({ msg: 'Job Listing not found' }, { status: 404 });
    }

    return NextResponse.json({ jobListing }, { status: 200 });
  } catch (err) {
    console.error('Error fetching job listing:', err);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validationResponse = await validateTokenHandler(req);
    if (validationResponse) return validationResponse;

    await db.dbConnect();

    const { id } = params;
    const jobListing = await JobListing.findById(id);
    const userID = jobListing.recruiter; // Assuming recruiter ID is used for authorization

    if ((req as CustomRequest)?.user?.id !== userID) {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, company, location, employmentType, description, salaryRange, requirements } = body;

    // Ensure required fields are present
    if (!title || !company || !location || !employmentType || !description || !requirements) {
      return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
    }

    // Find the job listing by ID and update it
    const updatedJobListing = await JobListing.findByIdAndUpdate(
      id,
      { title, company, location, employmentType, description, salaryRange, requirements },
      { new: true }
    );

    if (!updatedJobListing) {
      return NextResponse.json({ msg: 'Job Listing not found' }, { status: 404 });
    }

    return NextResponse.json(
      { msg: 'Job Listing updated successfully', jobListing: updatedJobListing },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error updating job listing:', err);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validationResponse = await validateTokenHandler(req);
    if (validationResponse) return validationResponse;

    await db.dbConnect();

    const { id } = params;
    const jobListing = await JobListing.findById(id);
    const userID = jobListing.recruiter; // Assuming recruiter ID is used for authorization

    if ((req as CustomRequest)?.user?.id !== userID) {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 });
    }

    // Find the job listing by ID and delete it
    const deletedJobListing = await JobListing.findByIdAndDelete(id);

    if (!deletedJobListing) {
      return NextResponse.json({ msg: 'Job Listing not found' }, { status: 404 });
    }

    return NextResponse.json({ msg: "success", jobListing: deletedJobListing }, { status: 200 });
  } catch (err) {
    console.error('Error deleting job listing:', err);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}
