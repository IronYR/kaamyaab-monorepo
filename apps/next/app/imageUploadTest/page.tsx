'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ImageUploadForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [textContent, setTextContent] = useState<string>('')
  const [userId, setUserId] = useState<string | null>(null)
  const [jwt, setJwt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  // Fetch user data from the cookie
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/auth/cookie')
        const data = await res.json()

        if (res.ok) {
          setJwt(data.jwt)
          setUserId(data.user?.user?.id) // Set user ID from cookie
          console.log(userId)
        } else {
          setError('Unauthorized. Please login.')
        }
      } catch (error) {
        setError('Failed to fetch user data.')
      }
    }

    fetchUserData()
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null)
  }

  const toBase64 = (file: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!file || !textContent) {
      alert('Please select a file and enter some text.')
      return
    }

    if (!userId) {
      alert('User not authenticated.')
      return
    }

    try {
      setLoading(true)

      // Convert the file to base64
      const base64File = await toBase64(file)

      // Create the body with base64 image and text content
      const data = {
        mediaContent: base64File, // base64 encoded image
        textContent: textContent,
      }

      // Send the request to the post creation API
      console.log(data)
      const response = await fetch(`/api/student/${userId}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Post created successfully!')
        // Optionally, navigate to another page or reset the form
        setFile(null)
        setTextContent('')
        router.push('/dashboard')
      } else {
        setError(result.msg || 'Failed to create post.')
      }
    } catch (error) {
      setError('An error occurred while creating the post.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload an image:
        <input type="file" accept="image/*" onChange={handleFileChange} required />
      </label>
      <label>
        Post Text:
        <textarea
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="Enter your post text"
          required
        />
      </label>
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" disabled={loading || !userId}>
        {loading ? 'Creating post...' : 'Create Post'}
      </button>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 10px;
        }
        input[type='file'] {
          margin-bottom: 10px;
        }
        textarea {
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
        }
        .error-msg {
          color: red;
          margin-top: 10px;
        }
        button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #aaa;
        }
      `}</style>
    </form>
  )
}

export default ImageUploadForm
