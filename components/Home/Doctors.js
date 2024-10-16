import React, { useState } from "react";
import PopOpen from "./PopOpen";
import couvillion from "../../public/headshots/COUVILLION.jpeg";
import dodini from "../../public/headshots/DODINI.jpeg";
import groff from "../../public/headshots/GROFF.jpeg";
import hess from "../../public/headshots/HESS.jpeg";
import westrate from "../../public/headshots/WESTRATE.jpeg";
import grana from "../../public/headshots/GRANA.jpg";
import khan from "../../public/headshots/KHAN.jpg";
import haskins from "../../public/headshots/HASKINS.jpg";
import littlejohn from "../../public/headshots/LITTLEJOHN.jpg";
import yan from "../../public/headshots/YAN.jpg";

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
      headshot: khan.src,
      altText: "Quratulain Khan's Headshot",
      name: "Quratulain Khan",
      certifications: ["PhD", "HSPP"],
      position: "Clinical Neuropsychologist",
      specialties:
        "Psychotherapy, Cognitive Rehabilitation Neuropsychological Assessment, Depression, Anxiety, Adjustment Disorder, Traumatic Brain Injury,Stroke, Multiple Sclerosis, Long COVID-19,  Attention difficulties, & Executive functioning difficulties . ",
      description:
        "Dr. Khan is a Clinical Neuropsychologist who specializes in the assessment and treatment of brain-based disorders that may impact cognitive, emotional, and physical functioning.   Dr. Khan has been working with individuals with a history of brain-based disorders for over ten years. She provides neuropsychological assessment, cognitive rehabilitation and psychotherapy. Her treatment approach is based on evidence-based approaches such as Cognitive Behavior Therapy and Mindfulness-based Stress Reduction. She helps her clients learn compensatory strategies to improve cognitive functioning. She also helps them learn ways to manage emotions as they adjust to cognitive changes and helps them recognize behavior patterns that may be impacting recovery or functioning. She specializes in the treatment of brain injury, particularly in the persistent symptoms of concussion.    Dr. Khan graduated from the APA/CPA accredited Clinical Neuropsychology Ph.D. Program at the University of Windsor in Ontario. Her residency training was completed at the APA/CPA accredited program at the Queen Elizabeth II Health Sciences Center in Nova Scotia. She then completed a specialized fellowship in Neuropsychological/Cognitive Rehabilitation at the JFK-Johnson Rehabilitation Institute in New Jersey. She works at a rehabilitation hospital and also in Private Practice. She is an adjunct Clinical Assistant Professor at the Indiana University School of Medicine, Department of Physical Medicine and Rehabilitation. She is also a member of the Cognitive Rehabilitation Task Force and the Mild Traumatic Brain Injury Task Force of the American Congress of Rehabilitation Medicine.",
    },

    {
      headshot: westrate.src,
      altText: "Ronald M. Westrate's Headshot",
      name: "Ronald M. Westrate",
      certifications: ["PhD"],
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
      specialties:
        "Chronic Pain, Mood Disorders, Anxiety, Couples Therapy & Trauma",
      description:
        "Dr. Jackie Hess worked for ten years with pain management teams in local hospitals, and has been an Adjunct Professor andfull-time Assistant Professor at the University of Indianapolisfor 29 years. She has also been a Clinical Psychologist workingin private practices as an independent practitioner for 29 years, joining Health Associates in 2019. She received a Bachelor’s degree in Psychology from Bucknell University, a Master of Science in Rehabilitation Counseling from Southern Illinois University, and the Doctor of Psychology Degree from Wright State University. She currently works with adults ages 18 through older adulthood and bases her interactions on the premise that a therapeutic relationship that is built on active listening and communication, trust, acceptance and understanding is key to the process of therapy. “Though I have knowledge about psychological theories and approaches, I am never the expert on the client’s life; therefore, learning from one another is essential.” The theoretical approaches on which she bases work with clients include Person-Centered, Humanistic, Narrative, and Cognitive Therapies.",
    },
    {
      headshot: dodini.src,
      altText: "Alfred Dodini's Headshot",
      name: "Alfred Dodini",
      certifications: ["PhD", "LCSW", "CFLE"],
      position: "Clinical Social Worker",
      specialties:
        "Children & Teens, Trauma EMDR), Couples, Families, Depression & Anxiety.",
      description:
        "Dr. Alfred (Fred) Dodini is a Licensed Clinical Social Worker and a Certified Family Life Educator with a Ph.D. in marriage and family therapy from Purdue University. He has 22 years of clinical experience working with couples, families, trauma, anxiety, depression, addictions, and life transitions. He worked with teens and young adults for five years while serving as clinical director for a residential treatment program for troubled youth. And his eight years of touring, performing, and managing in the entertainment industry allows him to draw insights from a treasure-trove of diverse life experiences and to inject some practical wisdom and humor into the counseling process. He is the author of the highly acclaimed book Shine Brighter: Choosing a Life of Greater Clarity, Purpose, and Joy. He and his wife Patricia are the parents of ten children and they are seriously considering taking up pickleball.",
    },
    {
      headshot: haskins.src,
      altText: "Edmund Haskins Headshot",
      name: "Edmund Haskins",
      certifications: ["Ph.D."],
      position: "Clinical Neuropsychologist",
      specialties: "",
      description: "",
    },
    {
      headshot: littlejohn.src,
      altText: "Derek Littlejohn Headshot",
      name: "Derek Littlejohn",
      certifications: ["MSN", "PMHNP-BC"],
      position: "Psychiatric-Mental Health Nurse Practitioner",
      specialties: "Medication management for patients of all ages.",
      description:
        "Dr. Derek Littlejohn is a board-certified Psychiatric-Mental Health Nurse Practitioner and U.S. Army veteran with a Bachelor’s Degree in Nursing at Purdue University. After completing his miliary service, he received a Master’s of Science as a Psychiatric-Mental Health Nurse Practitioner at Purdue University. He works very frequently with active-duty service members who have experienced trauma, adjustment disorders and addiction. Additionally, he works with clients dealing with depression, anxiety, bipolar and schizophrenia.",
    },
    {
      headshot: yan.src,
      altText: "Clyde Yan Headshot",
      name: "Clyde Yan",
      certifications: ["MSN", "PMHNP-BC"],
      position: "Psychiatric-Mental Health Nurse Practitioner",
      specialties: "Medication management for patients of all ages.",
      description:
        "Dr. Clyde Yan is a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHMP). He graduated with a Bachelor’s Degree from Purdue and a Master’s degree in counseling at Indiana University.  After starting work as a counselor, he witnessed drastic improvements patients made after they were started on psychiatric medication. After he completed his MSN specializing in psychiatric and mental health nursing, he has worked in inpatient, partial hospitalization programs and outpatient settings. His treatment approach is holistic, patient-centered, culturally sensitive and evidence based.",
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
              <PopOpen provider={provider} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
