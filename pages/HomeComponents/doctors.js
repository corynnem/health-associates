import React, { useState } from "react";
import PopOpen from "./PopOpen";
import couvillion from  '../assets/headshots/COUVILLION.jpeg'
import dodini from  '../assets/headshots/DODINI.jpeg'
import groff from  '../assets/headshots/GROFF.jpeg'
import hess from  '../assets/headshots/HESS.jpeg'
import westrate from  '../assets/headshots/WESTRATE.jpeg'
import elsbury from  '../assets/headshots/ELSBURY.jpg'
import grana from  '../assets/headshots/GRANA.jpg'
import userM from  '../assets/user-m.png' 
import userF from  '../assets/user-f.png'

const Doctors = () => {
  const [providers] = useState([
    {
      headshot: grana.src,
      altText: "Richard K. Grana's Headshot",
      name: "Richard K. Grana",
      certifications: ["PhD"],
      position: "Clinical Psychologist",
      specialties: "",
      description:
        "Richard Grana, Ph.D. has been a practicing psychologist for over 45 years. He is licensed as a psychologist in Indiana and Arizona, as well as having a tele-health license for patients in Florida. He received his Ph.D. from the University of Akron in Ohio. From 1970-1974 he commuted to New York City to study at the Institute for Advanced Study in Rational Psychotherapy and received supervision and certification from Albert Ellis, Ph.D., who is considered one of the founding fathers of Cognitive Behavioral Therapy. Dr. Grana has worked with all ages of patients. He has publications in the area of divorce adjustment, emphasizing the importance of post-divorce counseling to help parents create a healthy post-divorce family. In addition to his general counseling practice, for 30 years Dr. Grana conducted child custody evaluations upon referral from local courts and attorneys. Currently, his professional focus is on individual counseling with children and adults. Dr. Grana has been nationally recognized for MY MOVE, a children’s and parent’s publication to help reduce the stress of moving. Although no longer in print, MY MOVE was originally published by the Mayflower Moving Company. He was also featured in the INDIANAPOLIS MONTHLY MAGAZINE article “Meet Indy’s Top Shrinks.” Dr. Grana especially enjoys traveling and spending time with friends and family.",
    },
    {
      headshot: groff.src,
      altText: "Martin G. Groff",
      name: "Martin G. Groff",
      certifications: ["PhD"],
      position: "Clinical Psychologist",
      specialties: "",
      description:
        "Martin Groff, Ph.D., is a psychologist who treats children, adolescents and adults for emotional and behavioral issues such as depression, anxiety, anger, mood cycling, situational distress, interpersonal/social concerns, bereavement, trauma, ADHD and conduct problems.",
    },
    {
      headshot: couvillion.src,
      altText: "Patricia M. Couvillion's Headshot",
      name: "Patricia M. Couvillion",
      certifications: ["PhD"],
      position: "Clinical Psychologist",
      specialties: "",
      description:
        "Dr. Pat Couvillion is a licensed clinical psychologist who received her doctorate from Florida State University. Dr. Couvillion has over 30 years of professional psychotherapy experience. She focuses on counseling adults and couples with depression, anxiety, relationship problems, life transitions and general stressors.",
    },
 
      {
        headshot: elsbury.src,
        altText: "Kristina K. Elsbury's Headshot",
        name: "Kristina K. Elsbury",
        certifications: [ "LCSW"],
        position: "Clinical Social Worker",
        specialties: "Trauma, Anger Management, Anxiety, ASD, DID, Gender Identity, Marriage Counseling & Mood Disorders",
        description:
          "Kristina Elsbury, LCSW, is a licensed clinical social worker with a Masters of Social Work degree with a medical specialty from Indiana University. The last 9 years she has provided therapy to children, teens, and adults in home-based, community mental health, hospital and school-based programs. Kristina has special interest and experience in working with children and adults with trauma including sexual, physical, and emotional abuse and military trauma. As an EMDR therapist, Kristina also utilizes mindfulness, cognitive-behavioral therapy, play therapy, and strengths-based approach in working with individuals, families and couples. Kristina is a member of EMDRIA International Association of EMDR Practitioners and the National Association of Social Workers.",
      },
      {
        headshot: userF.src,
        altText: "Quratulain Khan's Headshot",
        name: "Quratulain Khan",
        certifications: ['PhD'],
        position: "Neuropsychologist",
        specialties: "",
        description:
          "No current information about this therapist.",
      },

      {
        headshot: westrate.src,
        altText: "Ronald M. Westrate's Headshot",
        name: "Ronald M. Westrate",
        certifications: ['PhD'],
        position: "Clinical Psychologist",
        specialties: "",
        description:
          "Dr. Ronald M. Westrate is a licensed clinical psychologist, receiving a doctorate from Purdue University. Dr. Westrate’s career encompasses private practice, corporate consulting and long-term care settings. Dr. Ron works with youth and adults alike, focusing on a variety of issues including addiction, anger management, couples therapy and post-traumatic stress disorder with veterans and non-veterans alike. Dr. Ron uses multiple treatment modalities, including a strong emphasis on mindfulness practices.",
      },
      {
        headshot: hess.src,
        altText: "Jacqueline L. Hess' Headshot",
        name: "Jacqueline L. Hess",
        certifications: ["PsyD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "Chronic Pain, Mood Disorders, Anxiety, Couples Therapy & Trauma",
        description:
          "Dr. Jackie Hess worked for ten years with pain management teams in local hospitals, and has been an Adjunct Professor andfull-time Assistant Professor at the University of Indianapolisfor 29 years. She has also been a Clinical Psychologist workingin private practices as an independent practitioner for 29 years, joining Health Associates in 2019. She received a Bachelor’s degree in Psychology from Bucknell University, a Master of Science in Rehabilitation Counseling from Southern Illinois University, and the Doctor of Psychology Degree from Wright State University. She currently works with adults ages 18 through older adulthood and bases her interactions on the premise that a therapeutic relationship that is built on active listening and communication, trust, acceptance and understanding is key to the process of therapy. “Though I have knowledge about psychological theories and approaches, I am never the expert on the client’s life; therefore, learning from one another is essential.” The theoretical approaches on which she bases work with clients include Person-Centered, Humanistic, Narrative, and Cognitive Therapies.",
      },
      {
        headshot: dodini.src,
        altText: "Alfred Dodini's Headshot",
        name: "Alfred Dodini",
        certifications: ["PhD", "LCSW", "CFLE"],
        position: "Clinical Social Worker",
        specialties: "Children & Teens, Trauma EMDR), Couples, Families, Depression & Anxiety.",
        description:
          "Dr. Alfred (Fred) Dodini is a Licensed Clinical Social Worker and a Certified Family Life Educator with a Ph.D. in marriage and family therapy from Purdue University. He has 22 years of clinical experience working with couples, families, trauma, anxiety, depression, addictions, and life transitions. He worked with teens and young adults for five years while serving as clinical director for a residential treatment program for troubled youth. And his eight years of touring, performing, and managing in the entertainment industry allows him to draw insights from a treasure-trove of diverse life experiences and to inject some practical wisdom and humor into the counseling process. He is the author of the highly acclaimed book Shine Brighter: Choosing a Life of Greater Clarity, Purpose, and Joy. He and his wife Patricia are the parents of ten children and they are seriously considering taking up pickleball.",
      },

      

  ]);


  return (
    <div id="providers">
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {providers.map((provider, index) => {
          return (
            <div id="card" key={index}>
                <PopOpen provider={provider} key={index}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
