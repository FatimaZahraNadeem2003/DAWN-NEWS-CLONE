'use client'
import React, { useState } from 'react';

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";


export default function LatestPage() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    const prevMonthDays = [26, 27, 28, 29, 30, 31];
    const currentMonthDays = Array.from({ length: 28 }, (_, i) => i + 1);
    const nextMonthDays = [1, 2, 3, 4, 5, 6, 7, 8];

    const selectedDay = 24;

    const originalArticles = [
        {
            title: "UK police arrest ex-envoy Peter Mandelson in Epstein case",
            desc: "He is being probed over allegations that he sent sensitive documents to the late US sex offender.",
            time: "PUBLISHED 14 MINUTES AGO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        },
        {
            title: "Food delivery rider killed after speeding car overturns, crashes into his motorcycle in Karachi: police",
            desc: "The food delivery rider was outside a bungalow in DHA when a speeding car turned over and crashed into his stationary motorcycle, says official.",
            time: "PUBLISHED 28 MINUTES AGO",
            image: "https://images.unsplash.com/photo-1558981403-c5f91ad9306b?w=400&h=250&fit=crop",
        },
        {
            title: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6",
            desc: "Secure a colossal 107-run victory, with Shimron Hetmyer blasting 85 off 34 balls.",
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop",
        },
    ];

    const imageSectionArticles = [
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
        {
            title: "Paris St Germain defender Achraf Hakimi to face trial for rape",
            desc: '"I calmly await this trial, which will allow the truth to come out publicly," Moroccan footballer says.',
            time: "PUBLISHED ABOUT AN HOUR AGO",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=250&fit=crop",
        },
        {
            title: "Pakistan attracts 79 new foreign firms, Rs40.7bn investment in three years",
            desc: "Foreign participation has also expanded through equity transactions, with a total of 61 shareholding transactions involving foreign companies and local entities.",
            time: "PUBLISHED ABOUT 2 HOURS AGO",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop",
        },
    ];

    const sidebarNews = [
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred competition", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps along Pakistan-Afghanistan border", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants without birth certificate", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US global tariff rate from 10pc to 15pc", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan paying interest on external loans of up to 8pc is ‘misleading’: finance ministry", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 31m births registered with...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" },
    ];

    return (
        <main className="bg-white min-h-screen">
            <Header />
            <Navbar />

            <div className="max-w-[1300px] mx-auto px-4 py-6">
                <div className="flex gap-6 border-b pb-2 mb-8 text-[11px] font-bold text-gray-500 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <span className="text-red-700 border-b-2 border-red-700 pb-2 cursor-pointer">ALL</span>
                    <span className="hover:text-black cursor-pointer">PAKISTAN</span>
                    <span className="hover:text-black cursor-pointer">BUSINESS</span>
                    <span className="hover:text-black cursor-pointer">WORLD</span>
                    <span className="hover:text-black cursor-pointer">SPORT</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-8">
                        <div className="space-y-10">
                            {originalArticles.map((post, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                                    <img src={post.image} alt="news" className="w-full md:w-[280px] h-[180px] object-cover" />
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-serif font-bold text-[#8B0000] leading-tight hover:underline cursor-pointer">
                                            {post.title}
                                        </h2>
                                        <p className="text-[#333] mt-2 text-[15px] leading-relaxed font-serif">
                                            {post.desc}
                                        </p>
                                        <p className="text-[10px] text-gray-500 mt-4 font-bold tracking-wider uppercase">
                                            {post.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-[#FAF7F2] p-4 border-t-2 border-red-800">
                            <span className="text-red-700 text-[10px] font-bold tracking-widest uppercase">Branded Content</span>
                            <div className="flex flex-col md:flex-row gap-4 mt-3">
                                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop" className="w-full md:w-[200px] h-[120px] object-cover" alt="branded" />
                                <div>
                                    <h3 className="font-bold text-[16px]">{`K&N's`} SmartCooking Recipes: Cheesy Seekh Kabab Spring Roll</h3>
                                    <p className="text-[13px] text-gray-700 mt-1">Crispy spring rolls stuffed with cheesy seekh kababs and savoury vegetables for a crunchy indulgent snack bursting with flavour.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 space-y-12">
                            {imageSectionArticles.map((post, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                                    <img src={post.image} alt="news" className="w-full md:w-[280px] h-[180px] object-cover" />
                                    <div className="flex-1">
                                        <h2 className="text-[26px] font-serif font-bold text-black leading-tight hover:underline cursor-pointer">
                                            {post.title}
                                        </h2>
                                        <p className="text-[#333] mt-3 text-[15.5px] leading-relaxed font-serif">
                                            {post.desc}
                                        </p>
                                        <p className="text-[10px] text-gray-500 mt-4 font-bold tracking-widest uppercase">
                                            {post.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 border-l lg:pl-10">
                        <div className="mb-10">
                            <h3 className="text-[11px] font-bold text-red-700 border-b pb-2 mb-4 tracking-widest">TOP AUTHORS</h3>
                            <ol className="space-y-3">
                                {["News Desk", "Iftikhar A. Khan", "Imran Gabol", "Anwar Iqbal", "Imtiaz Ali"].map((author, i) => (
                                    <li key={i} className="flex items-baseline gap-2 font-serif group cursor-pointer">
                                        <span className="text-2xl text-gray-300 italic">{i + 1}.</span>
                                        <span className="text-xl font-bold group-hover:text-red-700">{author}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-[11px] font-bold text-red-700 border-b pb-2 mb-6 tracking-widest uppercase">Top Reads Today</h3>
                            <div className="relative group">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop" className="w-full h-[350px] object-cover shadow-xl" alt="top read" />
                                <button className="absolute left-[-20px] top-1/2 bg-black text-white rounded-full p-1"><ChevronLeft size={20} /></button>
                                <button className="absolute right-[-20px] top-1/2 bg-black text-white rounded-full p-1"><ChevronRight size={20} /></button>
                            </div>
                            <p className="mt-6 font-serif font-bold text-[16px] leading-tight text-center px-4">
                                {`Trump's`} Board of Peace meeting raises more questions than answers about how his plan would be operationalised
                            </p>
                            <div className="flex justify-center gap-1.5 mt-4">
                                {[1, 2, 3, 4, 5].map(dot => <div key={dot} className={`w-2 h-2 rounded-full ${dot === 4 ? 'bg-red-800' : 'bg-gray-400'}`}></div>)}
                            </div>
                        </div>

                        <div className="flex border rounded overflow-hidden mb-6 h-10">
                            <button className="flex-1 bg-black text-white text-[10px] font-bold py-2 uppercase">24 Hours</button>
                            <button className="flex-1 bg-white text-black text-[10px] font-bold py-2 uppercase hover:bg-gray-50 border-l">3 Days</button>
                        </div>

                        <div className="space-y-5">
                            {sidebarNews.map((item, idx) => (
                                <div key={idx} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0">
                                    <img src={item.img} className="w-[80px] h-[60px] object-cover flex-shrink-0" alt="sm" />
                                    <h4 className="text-[13.5px] font-bold leading-tight font-serif hover:text-red-800 cursor-pointer">
                                        {item.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-10 bg-white">
            <div className="w-full max-w-[600px] border-t border-gray-200 mb-10"></div>

            <div className="flex items-center gap-2 mb-1">
                <div className="bg-white border border-gray-400 p-1 rounded-sm">
                    <CalendarIcon size={24} className="text-black" strokeWidth={1.5} />
                </div>
                <div className="border border-gray-400 px-3 py-1.5 w-[300px] text-[#4A5568] text-[15px] font-sans">
                    Tuesday, February 24, 2026
                </div>
            </div>

            <div className="w-[340px] bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 p-4 mt-2">
                
                <div className="flex justify-between items-center mb-6 px-2">
                    <button className="text-gray-400 hover:text-black">
                        <ChevronLeft size={20} />
                    </button>
                    
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <span className="text-[17px] text-[#4A5568] font-medium">February</span>
                        <ChevronDown size={14} className="text-gray-400 mt-1" />
                        <span className="text-[17px] text-[#4A5568] font-medium ml-2">2026</span>
                    </div>

                    <button className="text-gray-400 hover:text-black">
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-7 mb-4">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="text-center text-[13px] font-bold text-[#4A5568]">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-y-2">
                    {prevMonthDays.map((day, i) => (
                        <div key={`prev-${i}`} className="text-center py-2 text-[15px] text-gray-300">
                            {day}
                        </div>
                    ))}

                    {currentMonthDays.map((day) => (
                        <div key={day} className="flex justify-center items-center py-1">
                            <span className={`
                                w-9 h-9 flex items-center justify-center text-[15px] cursor-pointer rounded-full transition-all
                                ${day === selectedDay 
                                    ? 'bg-[#5D9CEC] text-white font-medium shadow-md' 
                                    : 'text-[#4A5568] hover:bg-gray-100'}
                            `}>
                                {day}
                            </span>
                        </div>
                    ))}

                    {nextMonthDays.map((day, i) => (
                        <div key={`next-${i}`} className="text-center py-2 text-[15px] text-gray-300">
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>

            <Footer />
        </main>
    );
}