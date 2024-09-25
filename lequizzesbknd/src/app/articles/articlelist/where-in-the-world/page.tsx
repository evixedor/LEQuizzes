import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>
            Where in the World Do People Speak English?
          </div>
          <div className={styles.text2}>by Alexandra Ambrose</div>
        </h1>
        <p className={styles.secondcontent}>
          English is one of the most prevalent languages in the world. <br />
          The top 5 countries with the highest population of English-speakers
          are the U.S., the U.K. (or England), Canada, Australia, and Ireland.
          215,423,557 people speak English in the U.S. alone. <br />
          Here is a list of countries in which English is the official language:{" "}
          <br />
          Antigua and Barbuda <br />
          Bahamas <br />
          Barbados <br />
          Belize <br />
          Botswana <br />
          Cameroon <br />
          Canada <br />
          Dominica <br />
          Eritrea <br />
          Federated States of Micronesia <br />
          Fiji <br />
          Gambia <br />
          Ghana <br />
          Grenada <br />
          Guyana <br />
          India <br />
          Ireland <br />
          Jamaica <br />
          Kenya <br />
          Kiribati <br />
          Lesotho <br />
          Liberia <br />
          Malawi <br />
          Malta <br />
          Marshall Islands <br />
          Mauritius <br />
          Namibia <br />
          Nauru <br />
          New Zealand <br />
          Nigeria <br />
          Pakistan <br />
          Palau <br />
          Papua New Guinea <br />
          Philippines <br />
          Rwanda <br />
          Saint Kitts and Nevis <br />
          Saint Lucia <br />
          Saint Vincent and the Grenadines <br />
          Samoa <br />
          Seychelles <br />
          Sierra Leone <br />
          Singapore <br />
          Solomon Islands <br />
          Somaliland <br />
          South Africa <br />
          South Sudan <br />
          Sudan <br />
          Swaziland <br />
          Tanzania <br />
          Tonga <br />
          Trinidad and Tobago <br />
          Tuvalu <br />
          Uganda <br />
          Vanuatu <br />
          Zambia <br />
          An official language is the one used by the government. <br />
          Interestingly enough, the U.K., Australia, and the United States are
          not included on this list. In these countries English is the de facto
          language or the one that is most commonly used, but isn’t necessarily
          recognized legally. <br />
          India is another country that could be included in this list,
          considering English is the primary language used in Indian schools;
          however, like the U.K., Australia, and the U.S., English is not
          considered the official language. <br />
          This map shows a geographic representation of where English is spoken
          (the countries in green primarily use English):
          <p className={styles.secondcontent}>
            Even though people speak English in many countries, the language
            sounds different according to the dialect used. Dialects are accents
            and grammatical rules that vary according to location. They can make
            two people speaking the same language sound like they are speaking
            completely different languages. <br />
            Next week I will talk about dialects in the U.S.! <br />
            Sources: <br />
            wikipedia.org/wiki/List_of_countries_where_English_is_an_official_language (list
            of countries and map) <br />
            my.sou.edu/cp/render.UserLayoutRootNode.uP?uP_tparam=utf&utf=http%3A%2F%2Fhanlib.sou.edu%2Freference%2Freference_resources.html{" "}
            <br />
            (NationMaster.com)
          </p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/transitive-intransitive" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/allusive-illusive-elusive" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
