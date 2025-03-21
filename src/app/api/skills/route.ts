import { NextResponse, NextRequest } from 'next/server';
import { ImageResponse } from 'next/og'
import { getQueryParams } from '@/lib/nav'
import  Image from 'next/image'
import skills from './skills.json'

export async function POST(req: NextRequest) {
  return NextResponse.json(skills)
}
