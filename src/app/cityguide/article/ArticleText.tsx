import React from "react";

export default function ArticleText() {
  return (
    <div
      className="mt-10 text-black text-justify font-[Author] text-[25px] font-normal leading-[38.4px] tracking-[-0.9px] capitalize"
      style={{ fontWeight: 200, fontStyle: "normal", fontFamily: "Inter" }}
    >
      <p className="pb-10">
        Sydney, Australia, is a vibrant city filled with iconic landmarks,
        stunning beaches, and a rich cultural scene that truly comes alive
        during the holiday season. December is the perfect time to visit, as
        summer begins in the Southern Hemisphere and Sydney&apos;s social
        calendar is packed with festive events, outdoor adventures, and exciting
        activities. Whether you&apos;re a local looking to enjoy the season or a
        visitor wanting to experience the best of Sydney, here are the top
        things to do in December.
      </p>
      
      <p className="pb-10">
        <strong>1. Sydney&apos;s Christmas Markets</strong>
        <br />
        <br />
        Nothing says holiday cheer like a festive Christmas market, and Sydney
        offers some of the best. Stroll through The Rocks Christmas Markets,
        where you can browse unique gifts from local artisans, taste delicious
        holiday treats, and enjoy live music. The market&apos;s location, set
        against the backdrop of the iconic Sydney Harbour Bridge and the Opera
        House, makes it a must-visit. <br /> <br />
        Top picks: 
      </p>

      {/* List outside of <p> tag */}
      <ul className="list-disc pl-5 space-y-2 pb-10">
        <li>The Rocks Christmas Markets</li>
        <li>
          Carriageworks Christmas Market: For fresh, local produce and gourmet
          Christmas food shopping
        </li>
        <li>
          and the QVB Building :Marvel at the grand 24-meter Christmas tree
          adorned with Swarovski crystals
        </li>
      </ul>

      <p className="pb-10">
        <strong>2. New Year&apos;s Eve Fireworks</strong>
        <br />
        <br />
        Sydney’s world-famous New Year’s Eve fireworks over Sydney Harbour
        are a must-see for anyone in the city. People from all over the globe come
        to watch the spectacular display of pyrotechnics that light up the night
        sky with vibrant colors and patterns. <br /><br />Best Viewing Spots:  
      </p>
      <ul className="list-disc pl-5 space-y-2 pb-10">
        <li>Sydney Opera
        House and Circular Quay : Great for those looking to be right in the
        action</li>
        <li>
        Mrs Macquarie’s Point: Offers incredible panoramic views
        </li>
        <li>
          
        Bradley’s Head: A quieter, family-friendly option
        </li>
      </ul>
      <p className="pb-10">
        <strong>3. Relax at Bondi Beach</strong>
        <br />
        <br />
        December in Sydney means it&apos;s summer, and that means beach time!
        Bondi Beach is one of the most famous beaches in the world, known for
        its golden sands, excellent surf, and laid-back vibes. Whether you’re a
        surfer, a sunbather, or just looking to dip your toes in the water,
        Bondi is a quintessential Sydney experience. <br /> <br /> For something extra
        special, check out Bondi Icebergs Pool, an ocean pool located right on
        the edge of the beach, or go on the Bondi to Coogee Coastal Walk, which
        offers stunning cliffside views.
      </p>
      <p className="pb-10">
        <strong>4. Carols in the Domain</strong>
        <br />
        <br />
        Carols in the Domain is Sydney’s largest annual Christmas concert, where
        families and friends gather under the stars to enjoy performances by top
        Australian and international artists. The event, held in The Domain, is
        free to attend, and it’s a great way to get into the Christmas spirit
        while singing along to classic carols.
      </p>
      <p className="pb-10">
        <strong>5. Experience the Sydney Festival</strong>
        <br />
        <br />
        Though it officially begins in early January, the Sydney Festival often
        has pre-festival events in December, offering a taste of what’s to come.
        The festival features a diverse range of performances, including
        theater, dance, music, and visual art, celebrating Sydney’s rich
        cultural scene.
      </p>
    </div>
  );
}
