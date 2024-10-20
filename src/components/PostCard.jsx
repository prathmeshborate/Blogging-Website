import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full justify-center mb-4">
                  <img
                      src={service.getFilePreview(featuredImage)}
                      alt={title}
                      className="w-full h-48 object-cover"
                  />
              </div>
              <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{title}</h2>
              </div>
          </div>
    </Link>
  )
}

export default PostCard