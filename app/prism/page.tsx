'use client'
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface Article {
  image: string;
  title: string;
  author: string;
  overlay?: string;
}

const editorPicks: Article[] = [
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },

  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },

  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
  {
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=600",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang",
    overlay: "bg-pink-500/40" 
  },
  {
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=600",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  },
];

const feedArticles = [
  {
    title: "Pakistan’s energy sector isn’t broken by chance. It’s broken by design",
    author: "Muhammad Hamza Latif",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800"
  },
  {
    title: "From guardrails to gaslighting: How the Grok fiasco redefined AI accountability",
    author: "Rafay Mahmood",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  },
  {
    title: "The eternal ascent: Basant returns to the skies of Lahore",
    author: "Salman Tahir",
    img: "https://images.unsplash.com/photo-1540200049006-2f0858e946a4?w=800"
  },
  {
    title: "Crime control or state criminality? Policing, power and impunity in Punjab",
    author: "Zoha Waseem",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
  }
];

export default function PrismPage() {
  return (
    <div className="bg-white min-h-screen font-serif text-[#1a1a1a]">
      
      <header className="px-4 py-4 md:px-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center">
          <div className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer">DAWN</div>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase select-none">P R I S M</h1>
          </div>
          <div className="flex justify-end gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <Icon size={14} fill="white" />
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="bg-black text-white py-2 text-center">
        <p className="text-[11px] md:text-sm tracking-wider font-sans font-light uppercase">
          Illuminating experiences and expertise
        </p>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center px-4 md:px-12">
            <h2 className="text-4xl md:text-[56px] font-normal leading-[1.1] mb-8 tracking-tight">
              From paper to action: The missing link in Pakistan’s response to climate change
            </h2>
            <div className="max-w-xl mx-auto space-y-6">
              <p className="text-lg md:text-2xl font-sans font-light leading-relaxed text-gray-700">
                Climate change in Pakistan is no longer just about risk recognition or finance mobilisation; it is about converting resources into a timely response.
              </p>
              <p className="text-sm md:text-base font-sans font-bold text-gray-500 uppercase tracking-widest italic pt-4">
                Sahar Arshad Mahmood
              </p>
            </div>
          </div>
          <div className="w-full aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200" 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 border-t border-gray-100">
        <h3 className="text-lg mb-8 italic">Editor's <span className="font-bold not-italic">Picks</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {editorPicks.map((item: Article, idx: number) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[1.5/1] overflow-hidden mb-4">
                <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {item.overlay && <div className={`absolute inset-0 ${item.overlay} mix-blend-multiply`}></div>}
              </div>
              <h4 className="text-[19px] leading-[1.2] mb-3 font-serif tracking-tight group-hover:underline">
                {item.title}
              </h4>
              <p className="text-[13px] font-sans text-gray-500 font-medium">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 py-28 flex flex-col lg:flex-row items-center justify-between gap-16 border-t border-gray-100">
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <p className="text-2xl md:text-[34px] leading-relaxed text-gray-800 font-serif max-w-lg">
            We bring you thoughtful, persuasive articles anchored in experiences and expertise.
          </p>
          <button className="text-xl font-sans font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
            What is Prism?
          </button>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end pr-10">
          <div className="relative">
            <h1 className="text-7xl md:text-[130px] font-light tracking-[0.4em] text-black relative z-10 select-none">
              PRISM
            </h1>
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none -ml-10">
               <svg viewBox="0 0 400 200" className="w-[120%] h-[120%]">
                  <line x1="40" y1="100" x2="380" y2="50" stroke="black" strokeWidth="0.5" />
                  <line x1="40" y1="100" x2="380" y2="75" stroke="black" strokeWidth="0.5" />
                  <line x1="40" y1="100" x2="380" y2="100" stroke="black" strokeWidth="0.5" />
                  <line x1="40" y1="100" x2="380" y2="125" stroke="black" strokeWidth="0.5" />
                  <line x1="40" y1="100" x2="380" y2="150" stroke="black" strokeWidth="0.5" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-4 py-12">
        {feedArticles.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 border-t border-gray-100 first:border-t-0 group cursor-pointer">
            <div className="text-center px-4 md:px-10">
              <h2 className="text-3xl md:text-[40px] leading-[1.05] mb-6 font-serif tracking-tight group-hover:text-gray-600 transition-colors">
                {item.title}
              </h2>
              <p className="font-sans text-[13px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {item.author}
              </p>
            </div>
            <div className="overflow-hidden aspect-[1.6/1]">
              <img 
                src={item.img} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}