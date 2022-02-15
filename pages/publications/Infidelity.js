import React, { useState, useEffect } from 'react';
import Navigation from '../Nav/Navigation'
import Title from './Title'
import back from '../assets/back.png'



const Base  = () => {
    const [URL, setURL] = useState("");


  
    useEffect(() => {
      switch (window.location.hostname) {
        case "localhost" || "127.0.0.2":
          setURL("http://localhost:3000");
          break;
        case "health-associates.herokuapp.com/":
          setURL("https://health-associates.herokuapp.com/");
      }
    }, []);
  

    return (
        <div >
            <Navigation/>
            <Title pageName={"What’s Happening to Us?"}/>
            <br/>
            <br/>
            <div className='article'>
                <p>Infidelity-~being sexually unfaithful to your partner. What labels or images does that word bring to your mind? Disloyal? Unfaithful? Joy? Deceit? Lying? Guilt? Excitement? Cheap love? Anxiety?  Lost dreams? Closeness? Broken promises? Sex? Distrust? Affection? Fractured families?</p>
                <br/>
                <p>Because infidelity is so prevalent, the staff at Health Associates has decided to devote this entire issue of Optimum to infidelity and basic preventative strategies.</p>
                <br/>
                <p>People’s degree of faithfulness is certainly difficult to measure and may not be consistent across different cultures, ages, or economic groups. But statistics regarding infidelity—secretive sex outside of a monogamous marriage—have increased dramatically over the years.</p>
                <br/>
                <p>Not so long ago, we were told that 50 percent of men and 25 percent of women had affairs. Now as many as 60 percent of men and 40 percent of women are thought to be unfaithful to their spouses.</p>
                <br/>
                <p>These figures are complicated by the fact that, while some people will cheat on their spouses only once, others will have multiple affairs while married.</p>
                <br/>
                <p>There are several types of ”people who cheat”—perhaps as many as six different types. This is because people who have affairs do so for several different reasons, but typically people fall into one of two primary groups.</p>
                <br/>
                <p>One group is made up of individuals who are likely to have multiple affairs. This group includes people who are unable to be loyal to anyone: people with sexual addictions, people who feed their self—esteem by conquests, and people who need constant approval. This is a complex group of people for whom change often is difficult.</p>
                <br/>
                <p>The second group is quite different; made up of people who are basically healthy individuals who find themselves in unhappy marriages. This group tends to have affairs in times of emotional or marital crisis, especially when intimacy, sexual excitement, and closeness are lacking with their spouses.</p>
                <br/>
                <p>People in this type of relationship may be struggling to stay in dead, unemotional marriages to otherwise good people. The desire to withdraw from the marriage is strong enough to send them looking for a new partner, but the desire to avoid divorce may be equally strong for a variety of reasons. They may feel tied to their marriages because of inadequate finances, poor job skills, commitment to children, or the belief they are unable to care for their families independently.</p>
                <br/>
                <p>This type of infidelity is often referred to as a ”bridge” because the affair serves the purpose of providing the individual an eventual bridge out of the marriage relationship. Bridge relationships tend be undertaken by people who are considering divorce. Their marital emptiness makes them vulnerable to extra-marital relationships, since this type of person may be insecure about being alone and seeks another relationship in order to ease out of marriage.</p>
                <br/>
                <p>Individuals involved in this type of infidelity vary greatly in the length of time it takes them actually to leave the marriage. It could be weeks or months—or it could be years. Often the extra-marital relationship does not last long past the marriage-leaving stage. Those bridge relationships that do extend past the divorce often are problem-filled since they began as affairs, and one or both partners have difficulty trusting the other not to have an affair with someone else.</p>
                <br/>
                <p>Perceptions of what is “normal” in relationships can create unrealistic expectations regarding trust. Sexual fantasy is a good example. While some people view any sexual fantasy as a betrayal, most mental health professionals see thought and fantasy as a normal part of human living.</p>
                <br/>
                <p>Frank Pittman (Private Lies: Infidelity and the Betrayal of Intimacy, 1989) explains that it’ 5 normal to have sexual fantasies about people other than your spouse. But to act on such fantasies or sexual thoughts, especially when they challenge marital loyalty, can be destructive and undesirable.</p>
                <br/>
                <p>Pittman cautions that “lnfidelity may not be the worst thing that one marriage partner can do to another, but it may be the most confusing and disorienting and therefore the most likely to destroy the marriage—not necessarily because of the sex, but because of the secrecy and the lies” (p.20). Since trust is a basic underpinning of the marital relationship, the couple often needs marriage counseling in order to reestablish the trust breached by the unfaithful spouse.</p>
                <br/>
                <p>One tactic for avoiding the infidelity trap is to recognize typical danger points in marriages and to prepare to counteract them. For example, the addition of children to the marriage is often a danger point for a husband who may feel abandoned or jealous. He may also resent the additional responsibility, particularly if the wife has quit work in order to stay home with the children.</p>
                <br/>
                <p>Gail Sheehy explains in Passages (1974) that, for a woman, age 35 is the beginning of the danger-age for infidelity as she becomes aware of her changing body and tends to turn to sexual experiences to help counteract feelings of aging. Around this age the wife is also likely to reenter the work force, since her children usually are in school by this point, and exposure to new men and new experiences may help to vitalize her sexual desires especially if her husband is not meeting her sexual and emotional needs at home.</p>
                <br/>
                <p>Dual-income households pose a temptation to both partners. Their time demands are heavy, and each may feel too tired at the end of a work day to invest energy in nurturing the relationship. Yet that personal investment is exactly what is needed if the marriage is to thrive.</p>
                <br/>
                <p>The marital partners’ failure to recognize their ”job descriptions” in marriage poses one of the most frequent threats. No relationship can flourish without both partners investing sufficient time and attention in its development and maintenance.</p>
                <br/>
                <p>Whatever the patterns or reasons for infidelity, feelings of mild to severe anger are almost always present in the person having the affair—and eventually in the other spouse, especially once the affair is suspected or actually discovered.</p>
                <br/>
                <p>For the unfaithful partner, the affair may be an emotional roller coaster with contrasting feelings of excitement, guilt, anxiety, joy, and confusion. People in this situation often struggle with the break-up in their own value system, indecision, self-criticism, and depression.</p>
                <br/>
                <p>Many people end up in a therapist’s office after the affair has begun or after a previous infidelity has been revealed. At these points emotions are complex and intense, and counseling may be more difficult and complicated. The anger and wish to ”pay back” from the loyal spouse may be difficult to control, making it ”more difficult to bring the unfaithful partner back into the marriage with a strong commitment to improve the relationship—especially if the affair provides an intense and pleasurable level of intimacy which seems unlikely with the spouse.</p>
                <br/>
                <p>This is often a ”flash point” in the marriage, since an overly emotional or blaming response from the victim spouse can push the unfaithful partner away from the marriage—solidifying the affair. The appropriate response to news that your spouse is having an affair differs greatly from situation to situation, and careful decision-making and planning on the part of the loyal spouse is necessary prior to confrontation. If there is a desire to save the marriage, individual counseling at this juncture can aid in determining an effective approach for bringing the disloyal spouse into marriage counseling. Still, things may never be quite the same.</p>
                <br/>
                <p>When one looks at the pain, sadness, confusion, and break-up of families that can occur following infidelity, the focus should be less on how to survive infidelity, and more on how to prevent infidelity. Two obvious prevention measures are: 1) not to have an affair, and 2) to recognize when a marriage is in danger and needs help to improve the relationship. if you genuinely want to leave a marriage, recognize the added problems an affair will create. Deal with the marital issues. Or seek a divorce, without adding the anger an affair will bring to the litigation and adjustment process–for both. you and your spouse.</p>
                <br/>
            </div>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow' />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Base;