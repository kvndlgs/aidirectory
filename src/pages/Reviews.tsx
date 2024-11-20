import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import { reviews } from '../data/reviews';

function Reviews() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Tool Reviews</h1>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{review.toolName}</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{review.rating.toFixed(1)}/5.0</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                {review.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{review.content}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 hover:text-indigo-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes} Helpful</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-indigo-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>{review.comments} Comments</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={review.reviewer.avatar}
                  alt={review.reviewer.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{review.reviewer.name}</span>
                <span>•</span>
                <span>{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;