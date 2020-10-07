---
title: GCP Data Engineering Certification Exam - Reflection
date: "2020-09-30"
description: My reflection of the data engineering exam as well as some tips and suggestions
---

# Introduction

I recently passed Google Cloud's professional data engineering exam and as of the 29th of September I am officially certified! I've come across many medium articles in my preparation so I thought it would be worth writing a review of my experience and some tips for taking the exam.

# Readiness

So obviously it helps to be a user of Google Cloud Platform, but I have read stories of people passing with no on the job experience so don't let that put you off you really want to be certified. If you want to gauge how ready you are you can try the practice exam that is available on Google's website [Google Cloud - Data Engineering Practice Exam](https://cloud.google.com/certification/practice-exam/data-engineer). Also use this to identify topics that require the most development. For example when I did this I knew I needed more work on understanding Spanner, Dataproc and Dataflow streaming concepts.

# Preparation

As a Googler I should recommend online courses such as PluralSight and Coursera, and they are fairly good resources. I actually pay for my own subscription to PluralSight because I like the courses they have. However, since this is my own blog with my own views I personally would recommend looking at Cloud Guru (also Linux Academy, but this was acquired by Cloud Guru) and their [Data Engineering course](https://acloud.guru/learn/gcp-certified-professional-data-engineer). I have heard their courses for the other certifications are good too. I found the topics presented nicely and organised in a way that makes sense and makes learning much easier. They also include practice questions after each section, but honestly these questions are much easier compared to the questions on the actual exam. 

Another course you *can* look at is Coursera preparing for the Google Cloud Data Engineering Exam as what makes this useful is that it specifically tells you topics to look at, hints, and example questions. It is a bit outdated as it still references case studies, but questions asked in the past are  similar(ish) enough to the actual exam questions. 

[Coursera - Preparing for the Google Cloud Professional Data Engineer Exam](https://www.coursera.org/learn/preparing-cloud-professional-data-engineer-exam)

# Practice Tests

This is probably the most important part of preparing for an exam. Complete practice tests and identify where your gaps are and check that you're able to recall information correctly. I was surprised to be caught out by small things and they may have cost me the exam if I didn't do any practice questions.

# Recommendations

- [WhizLabs GCP Data Engineering Practice Exams](https://www.whizlabs.com/google-cloud-certified-professional-data-engineer/free-test/) - Whizlabs have one test for free and they come with explanations for the correct answer and why the incorrect answers are not suitable. I bought the rest and they were doing a discount so you may be able to do the same. I paid £17 and having that peace of mind helped me personally.
- [ExamTopics - GCP Data Engineering Practice Questions](https://www.examtopics.com/exams/google/professional-data-engineer/view/) - SO many example test questions! The only irritating thing is the website is a bit annoying to navigate, but I suppose that's the price to pay for accessing free material.

# Remote Test Tips

Are you taking the exam remotely? Be aware that Kirterion is extremely strict about your environment and how you behave during the test. You will need to do a pre-test check where you show your desk environment via your computer's camera. This includes the walls, ceiling, floor. You're not allowed any pen or paper or headphones or watches. You're also **not allowed to talk and you will be warrned, even if you're reading out loud the terms and conditions**. If you continue to talk you may have your exam suspended. Also, when booking your test, I recommend adding 15 minutes extra time in your schedule as it took 20 minutes to be connected to someone to perform the pre-test check.

# Topics

After my exam I wrote down as many topics I could remember so that I can share my personal experience of what the questions were. Please note this is not everything and the questions you get may not cover these topics either.

## Dataproc

- SSD/HDD and GCS/HDFS
- Initialisations
- Migrating on-prem workloads to GCP

## BigTable

- Time series
- Key and Schema design
- Single-routing and Multi-routing
- Supporting multiple workloads
- How to change/add clusters
- HA

## BigQuery

- Authorised Views
- IAM
- Slots
- Partitioning and Clustering

## Dataflow

- Sidein/SideOut
- DoFN
- Transforms
- Updating Pipelines

## CloudSQL

- HA configurations

## Spanner

- Key design

## Datastore

- Exporting data

## PubSub

- Attributes and features (and what it cannot do)
- Kafka vs. PubSub

## Machine Learning

- Fundamentals of ML
- L1/L2 Regularization
- What to do when you have underfitting/overfitting
- Evaluation metrics
- Hyperparameters
- TensorFlow
- GPU/TPU

## Security/IAM/Logging

- Know KMS, CMK, and CSEK
- How to provision and control access
- How to configure logging

## Other

- Based on some criteria which product(s) should you use
- Data transfer options (eg. gsutil, google transfer service, transfer appliance)
- You just need to know what these do - Cloud DataPrep, Scheduler, Composer
- Data Studio - owner vs viewer and caching (I only had 1 question on this)

If I remember correctly there are 10 questions related to ML or operationalising ML workloads so don't forget to learn these concepts.

# Other Exam Tips

There were a few questions that truly stumped me, and some of them were vague or the answer I was expecting wasn't an option. Don't let this throw you. Pick the answer that best matches the information in the question. Also, carefully read the question to make sure you have understood all of the criteria (eg. 100ms latency, low-cost) and pick the answer that seems best, even if in your mind you know there is a better architecture/solution. Additionally, answer questions as if you were taking this test six months ago. Don't let features that has recently become generally available or still in Beta throw you off. For example I had a question about accesss on BigQuery. I know it will be possible to grant access at a Table level, but for answering the question I had to remind myself this is a new feature. 

When you complete the test your result is displayed on the screen in such a way that it isn't obvious. It took me a few seconds to realise that I had passed. Once you do your exam your results is sent to Google to verify so it can take anywhere between a couple days to 7 working days to get your official certificate.

__Thanks for reading and good luck!__

Fumi