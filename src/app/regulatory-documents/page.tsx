"use client"
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import classes from './Disclosure.module.scss'
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Disclosures() {

    const aboutref = useRef(null);
    const router = useRouter();
    const [content, setContent] = useState('Privacy Policy');
    const currentYear = new Date().getFullYear();
    let i = 1;

    const links = [
        { name: 'Privacy Policy' },
        { name: "MIFIDPRU 8 Disclosure" },
        { name: 'UK Stewardship Code' },
        { name: "Shareholder Rights Directive" },
        { name: "Complaints Handling Disclosure" },
        { name: "Terms and Conditions" },
        { name: "Modern Slavery Act Transparency Statement" }
    ]

    const returnContent = () => {
        switch (content) {
            case "Modern Slavery Act Transparency Statement":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Modern Slavery Act Transparency Statement</p>
                        <p className="text-sm">
                            Aimsaf LLP (&quot;AIMSAF HOLDINGS&quot; or &quot;the Firm&quot;) acknowledges the importance of compliance with the Modern Slavery Act 2015 (the “MSA”). Modern slavery as referred to in the MSA includes slavery, servitude and forced or compulsory labour, and human trafficking, and human trafficking. The Firm is committed to conducting its business without modern slavery in either its business or its supply chains and to being transparent in its approach, as is consistent with the Firm&quot;s obligations under the MSA.
                            <br /><br />
                            After having reviewed the requirements of the MSA with regard to its business and supply chain, the Firm considers that its business and supply chain are at a low risk of involving instances of modern slavery. The Firm is aware of the importance of its compliance with the MSA and the need to take into account the risk of modern slavery in the Firm&quot;s business.
                            <br /><br />
                            This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015 in respect of the Financial year end 31 December 2023, and is approved by the Governing Body of the Firm. The Firm will periodically review and, as appropriate, update this statement.
                            <br /><br />
                        </p>
                    </div>
                );
            case "UK Stewardship Code":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">UK Stewardship Code</p>
                        <p className="text-sm">
                            Under Rule 2.2.3R of the Financial Conduct Authority&apos;s (&quot;FCA&quot;) Conduct of Business Sourcebook, Aimsaf LLP (&quot;AIMSAF HOLDINGS&quot; or &quot;the Firm&quot;), to the extent it is managing investments for a professional client (as defined by the FCA), is required to include a disclosure about the nature of its commitment to the UK Financial Reporting Council&apos;s Stewardship Code (the &quot;Code&quot;) or, where it does not commit to the Code, explain its considered choice based on the Firm&apos;s investment approach. The Code is a voluntary code and sets out a number of principles relating to engagement by investors in UK-listed companies.
                            <br /><br />
                            AIMSAF HOLDINGS invests in a variety of asset classes in a variety of jurisdictions globally. Whilst AIMSAF HOLDINGS generally supports the objectives that underlie the Code, the nature of its investment strategy does not allow it to formally engage with investee companies through voting rights. The Firm has therefore chosen not to commit to the Code at this time.
                            <br /><br />
                        </p>
                    </div>
                );
            case "MIFIDPRU 8 Disclosure":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Introduction</p>
                        <p className="text-sm">
                            The Financial Conduct Authority (“FCA” or “regulator”) in its Prudential sourcebook for MiFID Investment Firms (“MIFIDPRU”) sets out the detailed prudential requirements that apply to Aimsaf LLP (“AIMSAF HOLDINGS” or “the Firm”). In particular, Chapter 8 of MIFIDPRU (“MIFIDPRU 8” or the “public disclosures requirements”) sets out public disclosure obligations with which the Firm must comply, further to those prudential obligations.
                            <br /><br />
                            AIMSAF HOLDINGS is classified under MIFIDPRU as a small and non-interconnected investment firm (“SNI MIFIDPRU investment firm”). As such, MIFIDPRU 8 requires AIMSAF HOLDINGS to disclose information regarding the Firm&apos;s remuneration policy and practices.
                            <br /><br />
                            The purpose of these disclosures is to give stakeholders and market participants an insight into the Firm’s culture, and to assist stakeholders in making more informed decisions about their relationship with the Firm.
                            <br /><br />
                            This document has been prepared by AIMSAF HOLDINGS in accordance with the requirements of MIFPRU 8 and is verified by the Governing Body. Unless otherwise stated, all figures are as at the 31 st March 2024 financial year-end.
                            <br /><br />
                        </p>

                        <p className="text-sm font-bold uppercase mb-10 mt-10">Remuneration Policy and Practices</p>
                        <p className="text-sm font-bold uppercase mb-10 mt-10">Overview</p>
                        <p className="text-sm">
                            As an SNI MIFIDPRU investment firm, AIMSAF HOLDINGS is subject to the basic requirements of the MIFIDPRU Remuneration code. AIMSAF HOLDINGS, as an alternatives investment fund manager, is also classified as a collective portfolio management investment firm, and as such, is also subject to the AIFM Remuneration Code. The purpose of the requirements on remuneration are to:
                            <br /><br />
                            <ul className="list-disc">
                                <li>Promote effective risk management in the long-term interests of the Firm and its clients;</li>
                                <li>Ensure alignment between risk and individual reward;</li>
                                <li>Support positive behaviours and healthy firm cultures; and</li>
                                <li>Discourage behaviours that can lead to misconduct and poor customer outcomes.</li>
                            </ul>
                            <br /><br />
                            The objective of AIMSAF HOLDINGS&apos;s remuneration policies and practices are to establish, implement and maintain a culture that is consistent with, and promotes, sound and effective risk management and does not encourage risk-taking which is inconsistent with the risk profile of the Firm and the services that it provides to its clients.
                            <br /><br />
                            In addition, AIMSAF HOLDINGS recognises that remuneration is a key component in how the Firm attracts, motivates and retains quality staff and sustains consistently high levels of performance, productivity and results. As such, the Firm&apos;s remuneration philosophy is also grounded in the belief that its people are the most important asset and greatest competitive advantage.
                            <br /><br />
                            AIMSAF HOLDINGS is committed to excellence, teamwork, ethical behaviour and the pursuit of exceptional outcomes for its clients. From a remuneration perspective, this means that performance is determined through the assessment of various factors that relate to these values, and by making considered and informed decisions that reward effort, attitude and results.
                            <br /><br />
                        </p>
                        <br />
                        <br />
                        <p className="text-sm font-bold uppercase mb-10">Characteristics of the remuneration policy and practices</p>
                        <p className="text-sm">
                            Remuneration at AIMSAF HOLDINGS is made up of fixed and variable components. The fixed component is set in line with market competitiveness at a level to attract and retain skilled staff. Variable remuneration are paid on a discretionary basis and take into consideration the Firm’s financial performance, and the financial and non-financial performance of the individual in contributing to the Firm’s success. All staff members are eligible to receive variable remuneration.
                            <br /><br />
                            The below table summarises the financial and non-financial criteria of performance used across the Firm in assessing the level of variable remuneration to be paid:
                            <br /><br />
                        </p>
                        <br />
                        <br />
                        <table className="text-sm " style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>
                            <tbody>
                                <tr>
                                    <td width="94">&nbsp;</td>
                                    <td width="255">Financial Performance Criteria</td>
                                    <td width="274">Non-Financial Performance Criteria</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} width="94">Firm</td>
                                    <td width="255">Overall Firm performance</td>
                                    <td width="274">Collective performance of the Firm</td>
                                </tr>
                                <tr>
                                    <td width="255">Competitive market benchmarking data</td>
                                    <td rowSpan={2} width="274">&nbsp;<p></p>
                                        <p>Alignment of outcomes for our clients</p></td>
                                </tr>
                                <tr>
                                    <td width="255">Long term business planning</td>
                                </tr>
                                <tr>
                                    <td rowSpan={7} width="94">Individual</td>
                                    <td rowSpan={7} width="255">&nbsp;<p></p>
                                        <p>&nbsp;</p>
                                        <p>Individual performance relative to role requirement (including financial objectives)</p></td>
                                    <td width="274">Individual performance (including non-financial objectives)</td>
                                </tr>
                                <tr>
                                    <td width="274">Reliability and conduct</td>
                                </tr>
                                <tr>
                                    <td width="274">Effectiveness of controls</td>
                                </tr>
                                <tr>
                                    <td width="274">Adherence to Firm&apos;s policies and procedures</td>
                                </tr>
                                <tr>
                                    <td width="274">Ongoing compliance</td>
                                </tr>
                                <tr>
                                    {/* <td width="255">&nbsp;</td> */}
                                    <td width="274">Business development</td>
                                </tr>
                                <tr>
                                    {/* <td width="255">&nbsp;</td> */}
                                    <td width="274">Contribution to the Firm</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />< br />
                        <p className="text-sm mt-10">
                            The fixed and variable components of remuneration are appropriately balanced: the fixed component represents a sufficiently high proportion of the total remuneration to enable the operation of a fully flexible policy on variable remuneration. This allows for the possibility of paying no variable remuneration component, which the Firm would do in certain situations, such as where the Firm&apos;s profitability performance is constrained, or where there is a risk that the Firm may not be able to meet its capital or liquidity regulatory requirements.
                        </p>
                        <p className="text-sm font-bold uppercase mb-10 mt-10">Governance and Oversight</p>
                        <p className="text-sm">
                            The Governing Body is responsible for setting and overseeing the implementation of AIMSAF HOLDINGS&apos;s remuneration policy and practices. In order to fulfil its responsibilities, the Governing Body:
                            <br />
                            <br />
                            <ul className="list-disc">
                                <li>Is appropriately staffed to enable it to exercise competent and independent judgment on remuneration policies and practices and the incentives created for managing risk, capital and liquidity;</li>
                                <li>Prepares decisions regarding remuneration, including decisions which have implications for the risk and risk management of the Firm;</li>
                                <li>Ensures that the remuneration policy and practices take into account the public interest and the long-term interests of shareholders, investors and other stakeholders in the Firm; and</li>
                                <li>Ensures that the overall remuneration policy is consistent with the business strategy, objectives, values and interests of the Firm and of its clients.</li>
                            </ul>
                            <br /> <br />
                            AIMSAF HOLDINGS&apos;s remuneration policy and practices are reviewed annually by the Governing Body.
                        </p>
                        <p className="text-sm mb-10 mt-10 font-bold uppercase">
                            Quantitative Remuneration Disclosures
                        </p>
                        <p className="text-sm mb-10">
                            For the financial year 1st April 2023 to 31st March 2024, the total amount of remuneration awarded to all staff was £763K, of which £480K comprised the fixed component of remuneration, and £283K comprised the variable component. For these purposes, &apos;staff&apos; is defined broadly, and includes, for example, employees of the Firm itself, partners, employees of other entities in the group, employees of joint service companies, and secondees.
                        </p>
                    </div>
                );
            case "Terms and Conditions":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Terms and Conditions</p>
                        <p className="text-sm">
                            This website is provided by Aimsaf LLP.
                            <br /><br />
                            This website is subject to international copyright laws and other intellectual property rights with all rights reserved. No information contained in this website, any part of this website, or associated documents (together the “Information”), may be redistributed in whole or in part, stored securely in a retrieval system, modified, linked into, republished, uploaded, transmitted in any form or by any means electronic or mechanical, or by photocopying, recording or otherwise without the express prior written permission of Aimsaf LLP.
                            <br /><br />
                            The Information is confidential and is not intended to influence you in making any investment decisions and should not be considered as advice or a recommendation to invest. Any Information in this website may not be suitable for all investors and investors must make their own investment decisions using their own independent advisors and relevant offering material. Any investment decisions must be based upon an investor&apos;s specific financial situation and investment objectives and should be based solely on the information in the relevant offering memorandum. Income from or the price or value of any financial instruments may rise or fall. <strong>Past performance is not necessarily indicative of future results.</strong>
                            <br /><br />
                            The content of this website is not intended, and must not be construed, as an offer of, or a solicitation of an offer to purchase, any investments in any jurisdiction where such offer or solicitation would be unlawful. In particular, this website is not intended as marketing of any fund in any member state of the European Economic Area for the purposes of the Directive 2011/61/EU on Alternative Investment Fund Managers.
                            <br /><br />
                            The investment products and services described herein have not been and will not be registered in the United States with the Securities and Exchange Commission.  Information on this website shall not be construed as an offer or public offering of shares in any fund nor does it constitute a general solicitation, general advertising or direct selling effort under the Securities Act of 1933 of the United States.
                            <br /><br />
                            Aimsaf LLP assumes no responsibility or liability for the correctness, accuracy, timeliness or completeness of the Information, for any viruses contained in, or attached to, this website or for any loss, damage or lost opportunities resulting from the use of the Information. Any views, opinions or assumptions may be subject to change without notice.
                            <br /><br />
                            Aimsaf LLP. Incorporated in England and Wales, Company Number: OC419544. Registered office: 100 Wigmore Street, London WIU 3RN
                            <br /><br />
                            Authorised and regulated by the UK Financial Conduct Authority (FCA Registration Number: 792765). and registered as an Investment Adviser with US Securities and Exchange Commission (SEC). (CRD # 304300/ SEC#:801-120201).
                            <br /><br />
                        </p>
                    </div>
                );
            case "Shareholder Rights Directive":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Shareholder Rights Directive</p>
                        <p className="text-sm">
                            Aimsaf LLP (“AIMSAF HOLDINGS”) is making this statement in Compliance with Rule 2.2B.5R of the FCA&apos;s Conduct of Business Sourcebook (“COBS”).
                            <br /><br />
                            COBS requires every FCA authorised asset manager that invests in listed equities to:
                            <br /><br />
                            (1) develop and publicly disclose on its website, a copy of its engagement policy which includes the content specified in the amended EU Shareholder Rights Directive (Directive 2007/36/EC); and
                            <br />
                            (2) publicly disclose on an annual basis how its engagement policy has been implemented, including a general description of its voting behaviour, an explanation of its most significant votes and details of its use of the services of proxy advisors,
                            <br /><br />
                            or, in either case, to publicly disclose a clear and reasoned explanation of why it has chosen not to comply with those requirements.
                            <br /><br />
                            AIMSAF HOLDINGS has considered carefully whether it wishes to adopt an engagement policy and to make the disclosures described above and has, for the time being, decided not to do so. As regards AIMSAF HOLDINGS&apos;s investments that are focused on equities, AIMSAF HOLDINGS generally does not vote proxies. Upon the exceptional specific request of an individual portfolio manager, the Firm&apos;s compliance department, in consultation with senior management, may consider granting permission to vote proxies, if it determines that the vote is in the best interest of investors.
                            <br /><br />
                            Therefore, while AIMSAF HOLDINGS supports the general principles of shareholder engagement, it does not at this time (for the reasons set out above) consider it appropriate to adopt an engagement policy or make the relevant public disclosures. AIMSAF HOLDINGS will keep its position under review and will update this section of its website accordingly, if there is a change in its approach.
                        </p>
                    </div>
                );
            case "Privacy Policy":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Privacy Policy</p>
                        <p className="text-sm mb-10">
                            Your privacy is very important to us. This notice (“Privacy Notice”) is provided by Aimsaf LLP (“we” or “us”) and sets out our policies with respect to the collection, sharing and use of personal information.
                            <br /><br />
                            <strong>How we collect information about you</strong>
                            <br /><br />
                            We may collect personal data about you through:
                            <br /><br />
                            <ul className="list-disc">
                                <li>information provided directly to us by you, or another person on your behalf, through our website, by email or post, or in person;</li>
                                <li>information that we obtain in relation to any transactions between you and us;</li>
                                <li>recording and monitoring of telephone conversations and electronic communications with you as described below; or</li>
                                <li>the use of Internet “cookies” (an information collecting device from a web server), as described further below.</li>
                            </ul>
                            <br /><br />
                            We may also, in some circumstances, receive personal information about you from third parties, such as service providers or trading counterparties, regulatory or law enforcement agencies, credit reference agencies, recruitment agencies, and agencies conducting background checks. Personal information may also be obtained from publicly accessible sources of information, such as public databases, industry associations, social media and online professional networks.
                        </p>
                        <p className="text-sm font-bold mb-10">Why we collect information about you</p>
                        <p className="text-sm mb-10">
                            We may collect and use your personal information for the purposes of administering the relationship between us, marketing our products and services to you or the businesses with which you are associated, monitoring and analysing our activities, and complying with applicable legal or regulatory requirements.
                            <br /><br />
                            We will use one of the permitted grounds under the applicable law to process your information. Such grounds include instances where you have given your consent and cases where your consent is not required under applicable law, such as where we are required to comply with a legal obligation, or where we, or a third party, determine that it is necessary for our legitimate interests to collect and use your personal information.
                            <br /><br />
                            The legitimate interests to collect your personal information may include any of the purposes identified above and any other purpose where we or a third party have determined that you have a reasonable expectation for us or a third party to collect or use your personal information for such purpose. You have the right to object to the use of your personal data for direct marketing purposes.
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold mb-10">What are the consequences of failing to provide your personal information?</p>
                        <p className="text-sm mb-10">
                            As a regulated financial services firm, we are subject to legal and regulatory obligations that may require us to collect and securely store your personal information, such as the requirements to comply with the applicable law on prevention of financial crime, tax and regulatory reporting, or the rules on recording and monitoring of communications (as described below).
                            <br /><br />
                            We may also need to collect and use your personal information for the purposes of entering into or performance of a contractual arrangement between us.
                            <br /><br />
                            A refusal to provide us with personal information may, depending on the purpose for which your personal information is required, have various consequences such as us being unable to communicate with you, the termination of any service or other contractual arrangement between us, or, where we have a reasonable suspicion of illegal activity, we may be required to make a report to regulatory or enforcement agencies.
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold mb-10">The types of personal data we may collect and use</p>
                        <p className="text-sm mb-10">
                            The categories of personal data we may collect will depend on the nature of our relationship with you and the purpose of which information is being collected. Such personal data may include names, residential addresses or other contact details, signature, nationality, date and place of birth, national insurance or other tax identification number, photographs, copies of identification documents, bank account details, information about assets or net worth, credit history, criminal and administrative offences, source of funds details, or other sensitive information, such as certain special categories of personal data contained in relevant documents or materials.
                        </p>
                        <p className="text-sm font-bold mb-10">Do we use automated decision-making processes?</p>
                        <p className="text-sm mb-10">
                            No.
                        </p>
                        <p className="text-sm font-bold mb-10">Do we share your personal information with third parties?</p>
                        <p className="text-sm mb-10">
                            We may (to the extent relevant to the purpose for which we collect your information), share your personal data with third parties, such as:
                            <ul className="list-disc">
                                <li>our affiliates or other entities that are part of our group or with the funds we manage;</li>
                                <li>any person to whom we have a right or obligation to disclose personal data, or where we determine that disclosure is necessary to protect or defend our rights or property, including with regulators, courts of law, governmental, regulatory or law enforcement agencies;</li>
                                <li>our internet, IT, telecommunications and other service providers, including legal advisers, accountants, and providers of customer relationship management tools;</li>
                                <li>service providers and trading counterparties to our clients, including placement agents or distributors, brokers, banks, trading venues, clearing houses, custodians, corporate services providers, administrators of our funds;</li>
                                <li>credit reference agencies and other third parties conducting background checks in the context of prospective employment, or client, counterparty, or investment due diligence;</li>
                                <li>any person, as directed by you; or</li>
                                <li>any person to whom we transfer any of our rights or obligations under any agreement, or in connection with a sale, merger or consolidation of our business or other transfer of our assets, whether voluntarily or by operation of law, or who is otherwise deemed to be our successor or transferee.</li>
                            </ul>
                        </p>
                        <p className="text-sm font-bold mb-10">Transfers of personal information to countries outside of the European Economic Area (EEA)</p>
                        <p className="text-sm mb-10">
                            Due to the international nature of our business, your personal data may be transferred to countries outside of the EEA, such as to jurisdictions where we, or our clients, conduct business or have a service provider, including countries that may not have the same level of data protection as that afforded by the EU General Data Protection Regulation or other data protection rules applicable to us (collectively, “Data Protection Law”). In these circumstances, we take steps to ensure that the recipient agrees to keep your information confidential and that it is held securely in accordance with the requirements of Data Protection Law, such as by requesting appropriate contractual undertakings in our legal agreements with service providers.
                        </p>
                        <p className="text-sm font-bold mb-10">For how long do we keep your personal information?</p>
                        <p className="text-sm mb-10">
                            We will generally keep personal information about you for as long as necessary in relation to the purpose for which it was collected, or for such longer period if required under applicable law or necessary for the purposes of our other legitimate interests.
                            <br /><br />
                            The applicable retention period will depend on various factors, such as any legal obligation to which we or our service providers are subject as well as on whether you decide to exercise your right to request the deletion of your information from our systems. As a minimum, information about you will be retained for the entire duration of any business relationship we may have with you, and for a minimum period of five years after the termination of any such relationship.
                            <br /><br />
                            We will, from time to time, review the purpose for which we have collected information about you and decide whether to retain it, update it, or securely delete it, if the information is no longer required.
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold mb-10">What are you rights?</p>
                        <p className="text-sm mb-10">
                            You have certain rights under Data Protection Law in respect of the personal data we hold about you and which you may exercise. These rights are:
                            <br /><br />
                            <ul className="list-disc">
                                <li>to request access to your information;</li>
                                <li>to request rectification of inaccurate or incomplete information;</li>
                                <li>to request erasure of your information (a “right to be forgotten”);</li>
                                <li>to restrict the processing of your information in certain circumstances;</li>
                                <li>to object to our use of your information, such as where we have considered such use to be necessary for our</li>
                                <li>legitimate interests (e.g. in the case of direct marketing activities);</li>
                                <li>where relevant, to request the portability of your information;</li>
                                <li>where you have given consent to the processing of your data, to withdraw your consent; and</li>
                                <li>to lodge a complaint with the competent supervisory authority.</li>
                            </ul>
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold mb-10">How to contact us</p>
                        <p className="text-sm mb-10">
                            If you have any questions about this Privacy Notice or requests with regards to the personal data we hold about you, you may contact our Chief Operating Officer by email at aschaeffer@AIMSAF HOLDINGS.com or by writing to 100 Wigmore Street, London, W1U 3RN
                        </p>
                        <p className="text-sm font-bold mb-10">Complaining to ICO</p>
                        <p className="text-sm mb-10">
                            You have the right to complain to the Information Commissioner&apos;s Office (ICO). Further information is available from the ICO&apos;s website.
                        </p>
                        <p className="text-sm font-bold mb-10">Website maintenance and use of cookies</p>
                        <p className="text-sm mb-10">
                            To enable us to monitor and improve our website, we may gather certain information about you when you use it, including details of your operating system, browser version, domain name and IP address, and the details of the website you came from.
                            <br /><br />
                            We may send text files (e.g., “cookies” or other cached files) or images to your web browser for technical convenience to store information on your computer. For instance, we may use a session cookie to store form information that you have entered so that you do not have to enter such information again. We may use information stored in such text files and images to customise your experience on this website and to monitor use of this website. You may set your browser to notify you when you receive a cookie. Many web browsers also allow you to block cookies. If you block cookies you may not be able to access certain parts of this website. You can disable cookies from your computer system by following the instructions on your browser or at <a href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>.
                            <br /><br />
                            Google Analytics is also used to track website trends without identifying individual visitors. The cookie used by Google Analytics stores information such as what time the current visit occurred, whether the visitor has been to the site before, and what site referred the visitor to our website. Google Analytics generates statistical and other information about website use by means of cookies, which are stored on users&apos; computers.
                            <br /><br />
                            The information generated relating to our website is used to create reports about the use of the website.
                            <br /><br />
                            Google will store and use this information. Google&apos;s privacy policy is available at <a href="http://www.google.com/privacypolicy.html">http://www.google.com/privacypolicy.html</a>. If you would like to opt out of being tracked by Google Analytics across all websites please visit <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold mb-10">Recording and monitoring of communications</p>
                        <p className="text-sm mb-10">
                            We may record and monitor telephone conversations and electronic communications with you for the purposes of:
                            <br /><br />
                            <ul className="list-disc">
                                <li>ascertaining the details of instructions given, the terms on which any transaction was executed or any other</li>
                                <li>relevant circumstances;</li>
                                <li>ensuring compliance with our regulatory obligations; or</li>
                                <li>detecting and preventing the commission of financial crime.</li>
                            </ul>
                            <br /><br />
                            Copies of recordings will be stored for a period of five years, or such other longer period as we may determine
                            from time to time.
                        </p>
                    </div>
                );
            case "Complaints Handling Disclosure":
                return (
                    <div className="text-white md:pt-24 pt-0">
                        <p className="text-sm font-bold uppercase mb-10">Objective and General Policy</p>
                        <p className="text-sm">
                            We aim to ensure that we treat our customers fairly at all times. Any complaints will be investigated competently, diligently and impartially, assessed fairly and promptly with respect to the subject matter of the complaint, and whether the complaint should be upheld and what remedial action or redress may be appropriate.
                            <br /><br />
                            The FCA&apos;s Dispute Resolution (&quot;DISP&quot;) handbook sets out the rules relating to the handling of complaints from eligible complainants and MiFID clients. We have determined that we have no eligible complainants under the DISP rules at present and, as such, we are exempt from FCA rules in this area, however, we could receive MiFID complaints (as defined below).
                            <br /><br />
                            However, certain consumers could be considered to be eligible complainants under the DISP rules in the future and, as such, we will apply the rules within DISP with respect to those investors.
                            <br /><br />
                            In the limited circumstances in which the FCA requirements with respect to eligible complainants apply to us, we expect such complaints will only relate to certain investors in our AIF(s) who can be categorised as a &apos;consumer&apos; in relation to our regulated activities as the AIFM. The FCA has defined &apos;consumer&apos; as a natural person acting for purposes outside their trade, business or profession (e.g. a high net worth individual could fall within this definition).
                            <br /><br />
                        </p>
                        <p className="text-sm font-bold uppercase mb-10">Complaints Handling Procedure</p>
                        <p className="text-sm">
                            We define complaints as follows with respect to the two categories of complainants:
                            <br /><br />
                            <strong>Eligible complaint</strong> -defined by the FCA as meaning &apos;any oral or written expression of dissatisfaction, whether justified or not, from, or on behalf of, a person about the provision of, or failure to provide, a financial service which (a) alleges that the complainant has suffered (or may suffer) financial loss, material distress of material inconvenience; and (b) relates to an activity of that respondent, or any other respondent with whom that respondent has some connection in marketing or providing financial services or products, which comes under the jurisdiction of the Financial Ombudsman Service (“FOS”).
                            <br /><br />
                            <strong>MiFID complaint</strong> - defined as &apos;any oral or written expression of dissatisfaction, whether justified or not, from, or on behalf of, a person about the provision of, or failure to provide, a financial service or a redress determination which alleges that the complainant has suffered or may suffer financial loss, material distress or material inconvenience&apos;. This does not come under the jurisdiction of FOS.
                            <br /><br />
                            Upon receipt of a Complaint, as defined above, the Chief Operating Officer will ensure that eligible complainants are provided a copy of this document, which constitutes our complaints handling policy, when acknowledging a complaint.
                            <br /><br />
                            We will endeavour to communicate with you clearly and in plain language that is easy to understand and reply to your complaint without undue delay. As soon as we have made the relevant enquiries and reviewed your complaint we will write to you. If we have reasonable grounds to be satisfied that another respondent may be solely or jointly responsible for the matter alleged in your complaint, we may promptly forward the complaint, or the relevant part of it, in writing to that other respondent. We will inform you promptly in a final response of the reason for forwarding the complaint, including the other respondent&apos;s contact details. Where jointly responsible for the fault alleged in the complaint, we will comply with own obligations under the DISP rules in respect of that part of the complaint we have not forwarded.
                            <br /><br />
                            We will endeavour to write to you within eight weeks.
                            <br /><br />
                            All complainants should contact the Chief Operating Officer.
                            <br /><br />
                            Contact:
                            <br /><br />
                            Andrew Schaeffer
                            <br />
                            Address:
                            <br />
                            100 Wigmore Street, London, W1U 3RN
                            <br />
                            Telephone:
                            <a href="tel:0208 017 4517"> 0208 017 4517</a>
                            <br />
                            Email: <a href="mailto:0208 017 4517">  Aschaeffer@AIMSAF HOLDINGS.com</a>
                            <br />
                            <br />
                        </p>
                        <p className="text-sm font-bold uppercase mb-10">Financial Ombudsman Service (&quot;FOS&quot;)</p>
                        <p className="text-sm">
                            We are required to provide clear and accessible information about the Financial Ombudsman Service (&apos;FOS&apos;) including its website address.
                            <br /><br />
                            If your complaint is not resolved by us to your satisfaction, and if your complaint falls within the jurisdiction of the FOS, then you may take your complaint to the FOS.
                            <br /><br />
                            If a business and a customer can&apos;t resolve a complaint themselves, the FOS can give an unbiased answer about what&apos;s happened. If the FOS decide someone&apos;s been treated unfairly, they have legal powers to put things right. In order to contact the Financial Ombudsman Service or obtain details of the compensation scheme you should:
                            <br /><br />
                            Write to- The Financial Ombudsman Service, Exchange Tower, London, E14 9SR; or
                            Telephone 0300 123 9 123 or 0800 023 4567; or
                            Visit: <a href="http://www.financial-ombudsman.org.uk/default.htm">http://www.financial-ombudsman.org.uk/default.htm</a>

                            <br /><br />
                        </p>
                    </div>
                );
        }
    }


    return <section className="h-full bg-primary">
        <div className=" h-full w-full lg:p-24 p-10 lg:pb-4 font-sans" >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
                <div className="menu lg:col-span-1 col-span-4 lg:fixed block">
                    <ul>
                        <p onClick={() => router.push('/')} className="text-white uppercase font-sans text-primary text-xs font-semibold mb-8 cursor-pointer">{`< BACK`}</p>
                        {links.map((item: any, key: number) => {
                            return <div key={key} className="flex flex-row items-center gap-1 w-[90%]">{item.icon && <Image className="mb-8" width={15} height={15} src={"/icon-pdf.svg"} alt={"pdf-icon"} />}<li key={key} onClick={() => { setContent(item.name) }} className="uppercase font-sans text-primary text-xs font-semibold mb-8 cursor-pointer" style={item.name === content ? { color: '#417CFF' } : { color: '#fff' }}>{item.name}</li></div>
                        })}
                    </ul>
                </div>
                <div className="col-span-4 lg:col-start-2  lg:pl-10 min-h-[100vh]">
                    {returnContent()}
                </div>
            </div>
        </div>
    </section >

}
