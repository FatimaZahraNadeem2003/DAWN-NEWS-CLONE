"use client";
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MagazinePage = () => {
  const articles = [
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
    {
      category: "SPORTS",
      title: "THE MYTHS OF 'ACCEPTABLE RISK'",
      desc: "The outrage over the upcoming Enhanced Games — where athletes can take performance enhancing drugs — suggests it is more about",
      author: "BYRON HYDE",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
    },
    {
      category: "EXHIBITION",
      title: "THE MELANCHOLY OF DESTRUCTION",
      desc: "Munawar Ali Syed’s latest body of work reflects on our fraught relationship with nature and the uncertain destiny of modern cities",
      author: "RUMANA HUSAIN",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
    },
    {
      category: "BRANDED CONTENT",
      title: "K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma",
      desc: "A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables.",
      author: "SPONSORED",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      isBranded: true
    },
    {
      category: "HERITAGE",
      title: "PROTECTED BY THE PEEPAL",
      desc: "When demolition crews recently cleared the area around Lahore’s Bhati Gate, one small domed shrine survived — not because anyone",
      author: "SALMAN TAHIR",
      date: "PUBLISHED 22 FEB, 2026 06:46AM",
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
    },
    {
        category: "HISTORY",
        title: "THE FREEDOM FIGHTER WHO BECAME STATELESS",
        desc: "A scholar, a communist and an anti-colonial activist, Dr K.M. Ashraf spent his life arguing that India’s Muslims and Hindus shared a future.",
        author: "KAMRAN ASDAR ALI",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg"
      },
      {
        category: "EXHIBITION",
        title: "STATES OF MIND",
        desc: "Zahra Mansoor’s latest exhibition grapples with the nature of intimacy and unresolved inter-human relationships in a quirky manner",
        author: "NUSRAT KHAWAJA",
        date: "PUBLISHED 22 FEB, 2026 06:46AM",
        img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg"
      },
      {
        category: "SMOKERS' CORNER",
        title: "THE PROBLEM WITH 'TACTICAL ENTRYISM'",
        desc: "From Pakistan in 1977 to Bangladesh in 2026, when loosely organised reformists align with disciplined Islamist forces.",
        author: "NADEEM F. PARACHA",
        date: "UPDATED 22 FEB, 2026 09:56AM",
        img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg"
      },
      {
        category: "CLIFTONIA",
        title: "ALL IS WELL",
        desc: "In the Republic of Cliftonia, peace is permanent, statistics are miraculous and anything missing from official records simply",
        author: "FARID ALVIE",
        date: "UPDATED 22 FEB, 2026 01:58PM",
        img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg"
      },
  ];

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-white text-black font-serif px-4 md:px-10 lg:px-20 py-10">
      
      <div className="mb-8">
        <h1 className="text-6xl font-black tracking-tighter italic">eos</h1>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 items-start mb-16 border-b border-gray-200 pb-12">
        
        <div className="lg:w-[45%] w-full">
          <img 
            src="https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg" 
            alt="Feature" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="lg:w-[30%] w-full text-center flex flex-col justify-center items-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 uppercase">
            THE REBEL ENGLISH ACADEMY
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 font-sans">
            The latest novel by Mohammed Hanif is set in the immediate aftermath of the hanging of former prime minister Zulfikar Ali Bhutto
          </p>
          <div className="text-[10px] font-sans text-gray-500 uppercase tracking-widest">
            MOHAMMED HANIF <span className="mx-1">|</span> PUBLISHED 22 FEB, 2026 06:46AM
          </div>
        </div>

        <div className="lg:w-[25%] w-full bg-gray-50 p-2 flex flex-col items-center">
            <span className="text-[10px] text-gray-400 font-sans mb-1">Advertisement</span>
            <div className="w-full aspect-square relative border border-gray-200">
                <img 
                    src="https://i.dawn.com/primary/2026/02/02133207bb4c3b2.mp4" // Placeholder for ad image
                    alt="Ad" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 p-1 flex gap-1">
                    <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center text-[8px]">i</div>
                    <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center text-[8px]">x</div>
                </div>
            </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {articles.map((item, index) => (
          <div key={index} className="flex flex-col">
            
            {item.isBranded && (
                <span className="text-[10px] text-red-700 font-sans font-bold uppercase mb-1">
                    BRANDED CONTENT
                </span>
            )}

            <div className="aspect-[3/2] overflow-hidden mb-4 bg-gray-100">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>

            <h3 className="font-bold text-lg leading-tight mb-3">
              <span className="uppercase">{item.category}:</span> {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-snug mb-4 font-sans line-clamp-3">
              {item.desc}
            </p>

            <div className="mt-auto text-[10px] font-sans text-gray-400 uppercase tracking-tight">
              {item.author} <span className="ml-1">{item.date}</span>
            </div>

          </div>
        ))}
      </section>


    </div>
    <Footer />
    </>
  );
};

export default MagazinePage;