import React from "react";

import styled from "styled-components";

const TOSStyled = styled.div`
  text-align: left;
  padding: 5px;

  * {
    margin: 10px auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }
`;

const TOS = () => {
  return (
    <TOSStyled>
      <h1>Terms of Service</h1>
      <p>
        I agree to the Terms of Service (dialog) and request that AccountChek®
        act as an intermediary on my behalf to furnish information to a
        prospective creditor in order to further my application.
      </p>
      <div className="details">
        <h2>1. ACCEPTANCE OF TERMS</h2>
        <p>
          The AccountChek Company, LLC. (“AccountChek”) provides its service to
          You, subject to the following Terms of Service ("TOS" or "Agreement"),
          which may be updated by us from time to time without notice to You.
          You can review the most current version of the TOS at any time at:
          https://verifier.accountchek.com/tos. In addition, when using
          AccountChek services, You and AccountChek shall be subject to any
          posted guidelines or rules applicable to such services which may be
          posted from time to time. By connecting to and using this Site, You
          agree to be bound by all of the terms and conditions set forth herein.
        </p>
        <h2>2. DESCRIPTION OF SERVICE</h2>
        <p>
          AccountChek offers a technology-based deposit and asset verification
          service (the “Service”) designed to make it easier for a lender to
          verify and monitor the deposits and/or assets of a prospective or
          current borrower by performing the following on your behalf: (1)
          Securely retrieving balances and transaction detail from the
          borrower’s accounts at one or more financial institutions; (2)
          Delivering this information to the lender; and (3) providing for
          updates over a specified monitoring period.
        </p>
        <h2>3. LICENSE GRANT</h2>
        <p>
          "You" or "your" means the consumer who is being licensed to use the
          Service or Documentation, and is providing AccountChek access to his
          or her financial and/or investment accounts.
        </p>
        <p>
          "Service" means any services and products offered by AccountChek, the
          Site, all content of the Site, all Software, in whole or in part
          (including but not limited to the AccountChek and AccountChek Plus
          executables, libraries, examples, interface definitions, associated
          media and printed materials) which create, enable, relate to, and or
          facilitate the Service (or functionality thereof), and any online
          (PDF, Flash, or HTML) or other related documentation.
        </p>
        <p>
          We hereby grant You, a single user, a non-transferable, nonexclusive,
          restricted license to use (only in delivered code form) the Service
          through one (1) account to enable secure access to Your financial
          accounts balances and transaction detail and may include any liens or
          judgments that may be identified through public record sources as
          described herein.
        </p>
        <p>
          You may, subject to the terms and conditions of the TOS, allow Your
          immediate family and accountants or financial advisors to review Your
          records, data, compilation, reports, generated with the use of this
          Service, provided that any such authorized users agree to and abide by
          the terms and conditions of this agreement.
        </p>
        <h2>4. TITLE</h2>
        <p>
          The Service is licensed to You pursuant to this Agreement, not sold.
          AccountChek remains the owner of all right, title and interest in the
          Service. Any copy, modification, revision enhancement, adaptation,
          translation, or derivative work of or created from the Service made by
          or at Your direction shall be owned solely and exclusively by
          AccountChek, as shall all patent rights, copyrights, trade secret
          rights, trademark rights, and all other proprietary rights, worldwide
          (all the foregoing rights taken together being referred to
          collectively herein as "Intellectual Property Rights") therein and
          thereto.
        </p>
        <h2>5. THINGS YOU MAY NOT DO</h2>
        <p>
          The Service is protected by United States copyright laws and
          international treaties. You must treat the Service like any other
          copyrighted material (for example, a book). You may not:
        </p>
        <ul>
          <li>
            Copy the Service or the written materials accompanying the Service;
          </li>
          <li>Modify or adapt the Service or merge it into another program;</li>
          <li>
            Cause the Service in any way to be reverse engineered, disassembled,
            decompiled, decrypted, extracted, translated, nor shall any attempt
            to do so be undertaken or permitted, including any attempts to
            discover the source code of the Service, related algorithms,
            protocols, interfaces, logic or program code of the Service or any
            derivative work thereof;
          </li>
          <li>
            Bypass or make any attempt to bypass the copy protection, unlock
            mechanism, serial number scheme, etc., of the Service;
          </li>
          <li>
            Publish any part of Your account credentials, including Your secure
            Personal Access Code.
          </li>
          <li>
            Allow any access to or use of the Service by anyone other than Your
            immediate family and authorized Accountant or financial advisor as
            listed in paragraph 3 above, and others as described in paragraph
            16, below;
          </li>
          <li>
            Use the Service on a perpetual or continuous basis without the use
            of legally obtained account credentials;
          </li>
          <li>
            Place the Service onto a server so that it is accessible via a
            public network such as the Internet, or;
          </li>
          <li>
            Sublicense, rent, lease, loan, sell, transfer, assign, distribute,
            or otherwise make available to any other unauthorized person or
            entity, the Service, in whole or in part;
          </li>
          <li>
            Create, or attempt to create, any derivative works based on the
            Service, in whole or in part;
          </li>
          <li>Violate any obligation or provision of this agreement. </li>
        </ul>
        <h2>
          6. YOUR ACCOUNT OBLIGATIONS - INCLUDING CERTAIN LEGAL REPRESENTATIONS,
          AUTHORIZATIONS, AND DESIGNATIONS
        </h2>
        <p>
          In consideration of Your use of the Service, You represent, agree, and
          warrant that You:
        </p>
        <ul>
          <li>Are of legal age to form a binding contract;</li>
          <li>
            Are not a person barred from receiving Services under the laws of
            the United States or other applicable jurisdiction;
          </li>
          <li>
            Have not relied on any promises or representations not expressly
            made herein;
          </li>
          <li>
            Possess the full right, power and authority to enter into this
            agreement and to carry out Your obligations hereunder;
          </li>
          <li>
            Know of no impediments that would prevent AccountChek from complying
            with all the terms of this Agreement; and
          </li>
          <li>Will use the Service for lawful purposes only.</li>
        </ul>
        <p>
          You also agree to: (a) grant us permission to access your financial
          and/or investment accounts to which you provide us your sign-on
          credentials (each, a “Disclosed Account”). Your permission for us to
          access a Disclosed Account shall be deemed to:
        </p>
        <ul>
          <li>
            extend to all information contained therein, including but not
            limited to the transaction and balance information and up to
            twenty-four (24) months of transaction history; and
          </li>
          <li>
            remain in effect without interruption for ninety (90) days from the
            date you provide your sign-on credentials for that Disclosed
            Account.
          </li>
        </ul>
        <p>
          You expressly agree that by using the Service and or by agreeing to
          the terms herein, you are (1) authorizing AccountChek and its agents
          to access third party sites designated by you on your behalf, retrieve
          the information listed in the paragraph immediately above and provide
          such information to the lender you request, as well as to any
          secondary market investor, requested by the lender, that may purchase
          your loan, and (2) appoint AccountChek and its agents as your agent
          for this limited purpose, with full power and authority to perform
          acts necessary in connection with such activities.
        </p>
        <p>
          By entering the account credentials for your financial accounts, you
          are permitting AccountChek and its agents to process your request and
          use information submitted by you to accomplish the foregoing for the
          duration of the Monitoring Period. YOU ACKNOWLEDGE THAT IT IS YOUR
          RESPONSIBILITY TO EXERCISE SOUND JUDGMENT AND COMMON SENSE WHEN
          DEALING WITH INDIVIDUALS YOU DON’T KNOW AND WHEN DECIDING WHETHER AND
          WITH WHOM TO SHARE YOUR DEPOSIT AND ASSET INFORMATION, AND YOU AGREE
          THAT YOUR INTERACTIONS WITH SUCH INDIVIDUALS, INCLUDING YOUR ACCESS TO
          AND USE OF THE SERVICE IS AT YOUR OWN RISK. ADDITIONALLY, YOU
          ACKNOWLEDGE AND AGREE THAT NEITHER ACCOUNTCHEK, NOR ITS DIRECTORS,
          OFFICERS, AGENTS, EMPLOYEES, SUPPLIERS, LICENSORS, OR AFFILIATED
          COMPANIES, ARE RESPONSIBLE OR LIABLE TO YOU FOR ANY ACTIONS TAKEN OR
          DECISIONS MADE BY ANY INDIVIDUAL WITH WHOM YOU HAVE SHARED YOUR
          DEPOSIT OR ASSET INFORMATION.
        </p>
        <p>
          YOU ACKNOWLEDGE AND AGREE THAT WHEN ACCOUNTCHEK OR ITS AGENTS ACCESS
          AND RETRIEVE INFORMATION FROM THIRD PARTY SITES, ACCOUNTCHEK AND ITS
          AGENTS ARE ACTING AS YOUR AGENT, AND NOT THE AGENT OR ON BEHALF OF THE
          THIRD PARTY. You agree that the third party account providers shall be
          entitled to rely on the foregoing authorization and agency granted by
          you. You understand and agree that this Service is not endorsed or
          sponsored by any third party account providers accessible through such
          Service.
        </p>
        <p>
          You may choose to have this access terminated by contacting
          AccountChek at compliance@formfree.com wherein AccountChek shall
          remove your access permissions.{" "}
        </p>
        <p>
          Nothing in this section, including the existence of this section,
          shall limit any of Your obligations as otherwise described within the
          TOS. If You provide any information that is untrue, inaccurate, not
          current or incomplete, or AccountChek has reasonable grounds to
          suspect that such information is untrue, inaccurate, not current or
          incomplete, AccountChek has the right to suspend or terminate Your
          account and refuse any and all current or future use of the Service
          (or any portion thereof).
        </p>
        <h2>7. ACCOUNTCHEK PRIVACY POLICY</h2>
        <p>
          Subscriber Data and certain other information about You are subject to
          our Privacy Policy. For more information, see our full privacy policy.
          You understand that through Your use of the Service You consent to the
          collection and use (as set forth in the Privacy Policy) of this
          information.
        </p>
        <h2>8. ACCESS CREDENTIAL SECURITY</h2>
        <p>
          You will be given account access credentials after Your lender has
          submitted a request for Electronic Verification of Assets (“VOA”) via
          the Service. You are responsible for maintaining the confidentiality
          of the credentials. You are fully responsible for all activities that
          occur under Your credentials. You agree to (a) immediately notify
          AccountChek of any unauthorized use of Your account or any other
          breach of security, and (b) ensure that You exit from Your account at
          the end of each session. AccountChek and its directors, officers,
          agents, employees, suppliers, licensors or affiliated companies,
          cannot and will not be liable for any loss or damage arising from Your
          failure to comply with this Section, or that You may incur as a result
          of someone else using Your credentials, either with or without Your
          knowledge. You agree and acknowledge that You may not use anyone
          else's credentials any time.
        </p>
        <h2>9. INDEMNITY</h2>
        <p>
          You agree to indemnify and hold AccountChek and its directors,
          officers, agents, employees, suppliers, licensors or affiliated
          companies harmless from any losses, damages, claim or demand,
          including reasonable attorneys' fees or expenses incurred, made by any
          third party due to or arising out of Your use of and or connection to
          the Service, Your violation of the TOS, and or Your violation of any
          rights of another relating to the Service.
        </p>
        <h2>10. GENERAL PRACTICES REGARDING USE AND STORAGE</h2>
        <p>
          You acknowledge that AccountChek may establish general practices and
          limits concerning use of the Service, including without limitation the
          maximum number of days that subscriber data will be retained. You
          agree that AccountChek and its directors, officers, agents, employees,
          suppliers, licensors or affiliated companies, have no responsibility
          or liability for the deletion or failure to store any subscriber data
          maintained or transmitted by the Service. You acknowledge that
          AccountChek reserves the right to log off accounts that are inactive
          for an extended period of time. You further acknowledge that
          AccountChek reserves the right to modify these general practices and
          limits from time to time.
        </p>
        <h2>11. MODIFICATIONS TO SERVICE</h2>
        <p>
          AccountChek reserves the right at any time and from time to time to
          modify or discontinue, temporarily or permanently, the Service (or any
          part thereof) with or without notice. You agree that AccountChek and
          its directors, officers, agents, employees, suppliers, licensors or
          affiliated companies shall not be liable to You or to any third party
          for any modification, suspension or discontinuance of the Service.
        </p>
        <h2>12. TERM and TERMINATION</h2>
        <p>
          This Agreement will be deemed to have commenced upon the date You
          accept the TOS by selecting the I Accept the Terms of Service checkbox
          each time You login to the Service, and remains effective until
          terminated. You may terminate it at any time by notifying AccountChek
          by e-mail and destroying all copies of the Service and Documentation
          in Your possession. You agree, on termination of this license, to
          cease any and all use of the Service and further to destroy all copies
          of the Service and Documentation in Your possession. You agree that
          Your obligations under the TOS (including but not limited to the
          requirement to maintain the confidentiality and security of
          AccountChek) remain with You even after termination of the TOS.
        </p>
        <p>
          You agree that AccountChek may, under certain circumstances and
          without prior notice, immediately terminate Your access to the
          Service. Cause for such termination shall include, but not be limited
          to, (a) breaches or violations of the TOS or other incorporated
          agreements or guidelines, (b) requests by law enforcement or other
          government agencies, (c) a request by You (self-initiated account
          deletions), (d) discontinuance or material modification to the Service
          (or any part thereof), (e) unexpected technical or security issues or
          problems, (f) extended periods of inactivity, (g) suspicion or
          confirmation that You have engaged in fraudulent or illegal
          activities, and/or (h) nonpayment of any fees owed by Your lender in
          connection with the Services.
        </p>
        <p>
          Termination of Your service includes, but is not necessarily limited
          to: (a) removal of access to the Service, and (b) barring further use
          of the Service. Further, you agree that all terminations for cause
          shall be made in AccountChek's sole discretion and that AccountChek
          shall not be liable to You or any third-party for termination of Your
          account or access to the Service.
        </p>
        <h2>13. LINKS</h2>
        <p>
          The Service may provide, or third parties may provide, links to other
          World Wide Web sites or resources. You acknowledge and agree that
          AccountChek has no control over such sites and resources, and
          AccountChek and its subsidiaries, affiliates, officers, agents,
          co-branders or other partners, and employees, are not responsible for
          the availability of such external sites or resources, and does not
          endorse and nor are they responsible or liable for any Content,
          advertising, products, or other materials on or available from such
          sites or resources. You further acknowledge and agree that AccountChek
          and its directors, officers, agents, employees, suppliers, licensors
          or affiliated companies, shall not be responsible or liable, directly
          or indirectly, for any damage or loss caused or alleged to be caused
          by or in connection with use of or reliance on any such Content, goods
          or services available on or through any such site or resource.
        </p>
        <h2>14. CONFIDENTIALITY and PROPRIETARY RIGHTS</h2>
        <p>
          You acknowledge and agree that the Service contains trade secrets,
          proprietary know how and confidential information that are valuable
          and belong to AccountChek and are being made available to You in
          strict confidence, protected by applicable intellectual property and
          other laws. Content received through the Service may be displayed and
          printed for Your personal, non-commercial use only, as described
          herein. You may display and print Service compilations, spreadsheets,
          graphs, or materials which are generated from Your own personal
          account information, for Your own personal use. You may, on an
          occasional and irregular basis, disseminate an insubstantial portion
          of content from this Site, regarding Your personal information, for a
          noncommercial purpose, without charge, and transmitted in
          non-electronic form, to a limited number of individuals, provided You
          include all copyright and other proprietary rights notices with such
          portion of the content in the same form in which the notices appear in
          this Site, original source attribution, and the phrase "Used with
          permission from The AccountChek Company, LLC. " You may not post any
          content from this Site to newsgroups, mail lists or electronic
          bulletin boards, without the prior written consent of AccountChek. You
          agree that neither You, your agents, nor Your employees shall in any
          manner use, disclose or otherwise communicate any information with
          respect to the Service, or related documents which might enable use or
          copying of all or any portion of the Service. You agree to take all
          necessary action to protect the confidential and proprietary
          information included in the Service and related documents.
        </p>
        <p>
          Except as expressly allowed in this Agreement or authorized in writing
          by AccountChek, You agree not to modify, rent, lease, loan, sell,
          distribute or create derivative works based on the Service, or related
          documents, in whole or in part.
        </p>
        <p>
          Neither party shall have any obligation with respect to Confidential
          or Proprietary Information which: (i) is or becomes generally known to
          the public by any means other than a breach of the obligations of the
          receiving party; (ii) was previously known to the receiving party or
          rightly received by a receiving party from a third party; or (iii) is
          independently developed by the receiving party; (iv) is required to be
          disclosed by a final order of a court of competent jurisdiction; or
          (v) is otherwise required to be disclosed by applicable law following
          reasonable notice to the disclosing party.
        </p>
        <p>
          If You are legally compelled to disclose any of AccountChek’s
          Confidential or Proprietary information, then, prior to such
          disclosure, You will (i) promptly notify AccountChek in writing of the
          compulsion unless doing so would violate the terms of the order to
          disclose; (ii) assert the privileged and confidential nature of the
          Trade Secrets and (iii) cooperate fully with the AccountChek in
          protecting against any such disclosure and or obtaining a protective
          order narrowing the scope of such disclosure and/or use of the Trade
          Secrets.
        </p>
        <p>
          ANY USE OR DISCLOSURE OF CONFIDENTIAL OR PROPRIETY INFORMATION
          RELATING TO THE SERVICE, SOFTWARE, RELATED DOCUMENTS, OR OF THE
          RELATED ALGORITHMS, PROTOCOLS OR INTERFACES, OTHER THAN IN STRICT
          ACCORDANCE WITH THIS LICENSE AGREEMENT, MAY BE ACTIONABLE AS A
          VIOLATION OF ACCOUNTCHEK’S TRADE SECRET RIGHTS.
        </p>
        <h2>15. DISCLAIMER OF WARRANTIES</h2>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SERVICE
          IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS
          AVAILABLE" BASIS. ACCOUNTCHEK EXPRESSLY DISCLAIMS ALL WARRANTIES OF
          ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO
          THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NON-INFRINGEMENT. (ii) ACCOUNTCHEK MAKES NO WARRANTY THAT
          (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE
          UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT
          MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR
          RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR
          OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL
          MEET YOUR EXPECTATIONS, AND (v) ANY ERRORS IN THE SERVICE WILL BE
          CORRECTED. (vi) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH
          THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND
          THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER
          SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH
          MATERIAL. (vii) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
          OBTAINED BY YOU FROM ACCOUNTCHEK OR THROUGH OR FROM THE SERVICE SHALL
          CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.
        </p>
        <h2>16. LIMITATION OF LIABILITY</h2>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT NEITHER ACCOUNTCHEK NOR ANY OF
          ITS DIRECTORS, OFFICERS, AGENTS, EMPLOYEES, SUPPLIERS, LICENSORS OR
          AFFILIATED COMPANIES SHALL BE LIABLE TO YOU OR ANYONE ELSE FOR ANY
          DAMAGES, (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL EXEMPLARY DAMAGES OR SIMILAR DAMAGES), EVEN IF
          ACCOUNTCHEK OR ITS DIRECTORS, OFFICERS, AGENTS, EMPLOYEES, SUPPLIERS,
          LICENSORS OR AFFILIATED COMPANIES HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. SUCH DAMAGES MAY INCLUDE, BUT ARE NOT LIMITED TO,
          DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, BUSINESS
          INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES OR OTHER
          INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO: (i) THE USE OR THE
          INABILITY TO USE THE SERVICE; (ii) THE COST OF PROCUREMENT OF
          SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA,
          INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR
          TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (iii)
          UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA;
          (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; (v) IN
          WHOLE OR PART BY ACCOUNTCHEK OR ITS SUBSIDIARIES, AFFILIATES, MEMBERS,
          MANAGERS, OFFICERS, AGENTS, CO-BRANDERS, PARTNERS, AND OR EMPLOYEES'
          NEGLIGENCE OR CONTINGENCIES BEYOND THEIR CONTROL IN PROCURING,
          COMPILING, INTERPRETING, REPORTING OR DELIVERING THIS SITE AND ANY
          CONTENT THROUGH THIS SITE; (vi) OR ANY OTHER MATTER RELATING TO THE
          SERVICE, THE TOS, OR THE SUBJECT MATTER RELATING THERETO.
        </p>
        <h2>17. EXCLUSIONS AND LIMITATIONS</h2>
        <p>
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR
          THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
          CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS OF
          SECTIONS 17 AND 18 MAY NOT APPLY TO YOU.
        </p>
        <h2>18. FORCE MAJEURE</h2>
        <p>
          AccountChek shall not be responsible for failures of its obligations
          under this Agreement to the extent that such failure is due to causes
          beyond AccountChek’s control including, but not limited to, acts of
          God, war, acts of any government or agency thereof, fire, explosions
          epidemics, quarantine restrictions, strikes, delivery services,
          telecommunication providers, labor difficulties, lockouts, embargoes,
          severe weather conditions, delay in transportation, or delay of
          suppliers or subcontractors.
        </p>
        <h2>19. NO THIRD PARTY BENEFICIARIES</h2>
        <p>
          You agree that, except as otherwise expressly provided in this TOS,
          there shall be no third party beneficiaries to this agreement.
        </p>
        <h2>20. LENDER END-USER AGREEMENT</h2>
        <p>
          All users must have a permissible purpose in order to obtain the
          information from AccountChek. The lender and its designees agree to
          the permissible purpose as follows:
        </p>
        <ul>
          <li>
            According to the Gramm-Leach Bliley Act (GLBA), I agree that I am
            authorized by the consumer to access the consumer information to
            enforce a transaction.
          </li>
          <li>
            According to the Driver’s Privacy Protection Act (DPPA), I agree
            that in the normal course of business, I am authorized to verify the
            accuracy of personal information provided by the consumer. If the
            submitted information is incorrect, I am also authorized to obtain
            the correct information, but only for the purposes of preventing
            fraud by pursuing legal remedies against, or recovering on a debt of
            security interest against, the consumer.{" "}
          </li>
        </ul>
        <h2>21. TRADEMARK INFORMATION</h2>
        <p>
          All AccountChek logos, product and service names are trademarks and
          service marks of AccountChek. Without AccountChek's prior written
          permission, You agree not to display or use in any manner, the
          AccountChek marks.
        </p>
        <h2>22. GENERAL INFORMATION</h2>
        <h3>Entire Agreement.</h3>
        <p>
          The TOS constitutes the entire agreement between You and AccountChek
          and governs Your use of the Service, superseding any prior agreements,
          communication, advertising, proposals, and or representations between
          You and AccountChek with respect to the Service.
        </p>
        <h3>Attorney Fees.</h3>
        <p>
          If any legal action arises relating to this Agreement, the prevailing
          party shall be entitled to recover all court costs, expenses and
          reasonable attorney fees from the non-prevailing party.
        </p>
        <h3>Injunctive relief.</h3>
        <p>
          You recognize and acknowledge that any breach or threatened breach of
          this Agreement by You may cause AccountChek irreparable harm for which
          monetary damages may be inadequate. You agree, therefore, that
          AccountChek shall be entitled to an injunction to restrain You from
          such breach or threatened breach. Nothing in this Agreement shall be
          construed as preventing AccountChek from pursuing any remedy at law or
          in equity for any breach or threatened breach of this Agreement.
        </p>
        <h3>Choice of Law and Forum.</h3>
        <p>
          The TOS and the relationship between You and AccountChek shall be
          governed by the laws of the State of Georgia without regard to its
          conflict of law provisions.
        </p>
        <h3>Waiver.</h3>
        <p>
          The failure of AccountChek to exercise or enforce any right or
          provision of the TOS shall not constitute a waiver of such right or
          provision.
        </p>
        <h3>Savings Clause.</h3>
        <p>
          In case any one or more of the provisions of this Agreement shall be
          found to be invalid, illegal or unenforceable in any respect, such
          provision shall be amended, construed and applied so that such
          provision is valid and enforceable to reflect, as closely as possible,
          the original intent of such provision; and the validity, legality and
          enforceability of the remaining provisions contained herein shall not
          in any way be affected or impaired thereby.
        </p>
        <h3>No Agency.</h3>
        <p>
          Except for as expressly provided herein, this Agreement does not
          create any agency or partnership relationship between the parties.
        </p>
        <h3>No Right of Survivorship and Non-Transferability.</h3>
        <p>
          You agree that Your AccountChek account is non-transferable and any
          rights to Your AccountChek credentials or contents within Your account
          terminate upon Your death. Upon receipt of a copy of a death
          certificate, Your account may be terminated and all contents therein
          permanently deleted.
        </p>
        <h3>Export Law Assurances.</h3>
        <p>
          You agree that the Service will not be shipped, transferred or
          exported into any country or used in any manner prohibited by the
          United States Export Administration Act or any other export laws,
          restrictions or regulations.
        </p>
        <h3>Government End Users.</h3>
        <p>
          The AccountChek Service and related documentation are "Commercial
          Items", as that term is defined at 48 C.R.R. S 2.101, consisting of
          "Commercial Computer Software" and "Commercial Computer Software
          Documentation", as such terms are used in 48 C.F.R. S 12.212 or 48
          C.F.R. S 227.7202, as applicable. Consistent with 48 C.F.R. S 12.212
          or 48 C.F.R. S 227.7202-1 through S 227.7202-4, as applicable, the
          Commercial Computer Software and Commercial Computer Software
          Documentation are being licensed to U.S. Government end users (a) only
          as Commercial Items and (b) with only those rights as are granted to
          all other end users pursuant to the terms and conditions herein.
          Unpublished-rights reserved under the copyright laws of the United
          States.
        </p>
        <h3>Statute of Limitations.</h3>
        <p>
          You agree that regardless of any statute or law to the contrary, you
          shall not bring any action against AccountChek arising out of or
          related to this Agreement or the subject matter hereof more than one
          (1) year after the occurrence of the event which gave rise to such
          action.
        </p>
        <h3>Titles.</h3>
        <p>
          The section titles in the TOS are for convenience only and have no
          legal or contractual effect.
        </p>
        <h3>Notices.</h3>
        <p>
          All notices which concern this Agreement shall be given in writing, to
          the parties herein as follows: Delivery of notice from You to
          AccountChek shall be considered effective by sending an e-mail with
          "Notice" entered into the subject line, sent to the
          compliance@formfree.com; and delivery of notice from AccountChek to
          You shall be considered effective by transmission at Your e-mail
          address as contained in AccountChek's records. Any party to this
          Agreement may change its address for notice purposes, by providing
          written notice of the change of address to each of the other parties.
        </p>
        <h2>23. VIOLATIONS</h2>
        <p>
          Please report any violations of the TOS to our Customer Service
          Center.
        </p>
        <p>
          If You have any questions concerning this agreement, or if You wish to
          contact AccountChek for any reason, please contact: E-mail:
          compliance@formfree.com.
        </p>
      </div>
    </TOSStyled>
  );
};

export default TOS;
