"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

const supabase = createClientComponentClient();

// noCOunt option is for occassions where you don't want to implement the counter on reload
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // call the increment function from supabase
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text:slug,
        })
        // supabase error
        if (error) console.error("Error incrementing view count inside try block", error)
        // exception 
      } catch (error) {
        console.error("An error occurred while incrementing the view count: ", error);
      }
    }

    // if noCount is true
    if (!noCount) {
      incrementView(slug);
    }

  }, [slug, noCount]);

  useEffect(() => {
    // call the increment function from supabase
    const getViews = async () => {
      try {
        let { data, error } = await supabase
        .from('views')
        .select('count')
        .match({ slug: slug })  // match the slug col in views table with the given slug value
        .single();

        // supabase error
        if (error) console.error("Error retrieving views count inside try block", error);

        setViews(data ? data.count : 0);

        // exception 
      } catch (error) {
        console.error("An error occurred while retrieving the views count: ", error);
      }
    }
    getViews();
  }, [slug]);
  
  if (showCount){
    return (
      <div>{views} views</div>
    )
  } else {
    return null;
  }
}

export default ViewCounter