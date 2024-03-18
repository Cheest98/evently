"use server"

import {
    CreateEventParams,
} from '@/types';

import Event from '@/lib/database/models/event.model';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from "../database";
import User from '../database/models/user.model';
import { handleError } from '../utils';
import Category from '@/lib/database/models/category.model'

const populateEvent = (query: any) => {
    return query
      .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
      .populate({ path: 'category', model: Category, select: '_id name' })
  }


export const createEvent = async ({ userId, event, path }: CreateEventParams) => {
    try {
        await connectToDatabase();

        const organizer = await User.findById(userId)
        if (!organizer) throw new Error("Organizer not found!")

        const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })
        console.log(newEvent)
        revalidatePath(path)


        return JSON.parse(JSON.stringify(newEvent))
    } catch (error) {
        console.log(Error)
        handleError(error)
    }

}


export async function getEventById(eventId: string) {
    try {
      await connectToDatabase()
  
      const event = await populateEvent(Event.findById(eventId))
  
      if (!event) throw new Error('Event not found')
  
      return JSON.parse(JSON.stringify(event))
    } catch (error) {
      handleError(error)
    }
  }
  