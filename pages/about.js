import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Book,
  Gift,
  Hourglass,
  House,
  InfoCircle,
  People,
  Person,
  SignpostSplit,
  Sun,
  Sunrise,
  Sunset,
} from "react-bootstrap-icons";

export default function About() {
  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            About Us <People />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                Vision and Purpose <SignpostSplit className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  The foundation of this church is the Lord Jesus Christ
                  <i>(1 Corinthians 3:11; Ephesians 2:20)</i>, and He guides His
                  church in all affairs through the Holy Scriptures
                  <i>(Psalms 119; 2 Timothy 3:15-17)</i>. Therefore, the purpose
                  of this church is to be Bible-centered, Disciple-making and to
                  glorify God through Jesus Christ, in the power of the Holy
                  Spirit
                  <i>( Isaiah 43:7; Ephesians 1:6, 12, 14)</i>.
                </li>
                <br />
                <li>
                  The priorities of the ministry of this church flow from the
                  vision of God&#39s glory revealed in Jesus Christ. We exist to
                  savor this vision in worship <i>(John 4:23)</i>, strengthen
                  the vision in nurture
                  <i>(1 Corinthians 14:26; 2 Peter 3:18)</i>, and spread the
                  vision in discipleship, evangelism, missions, and loving deeds
                  <i>(Matthew 5:16; 28:18-20; 1 Peter 2:9; 3:15)</i>.
                </li>
                <br />
                <li>
                  In order to remain true to our Lord and His word, this church
                  must be marked by preaching the whole counsel of God
                  <i>(Acts 20:27; 2 Timothy 4:1-2)</i>, administering baptism
                  <i>(Matthew 28:19; Romans 6:1-4)</i> and the Lord’s Supper
                  <i>(Luke 22:19; 1 Corinthians 11:17-34)</i>, loving one
                  another
                  <i>(John 13:34-35; 1 John 3:11-24; 4:7-12)</i>, making
                  disciples <i>(Matthew 28:18-20)</i>, and practicing formative
                  <i>(1 Thessalonians 5:14; 1 Timothy 5:1-2; Titus 2:15)</i>
                  and corrective discipline
                  <i>(Matthew 18:15-20; 1 Corinthians 5:1-5)</i>.
                </li>
                <br />
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="bg-secondary">
        <Col className="text-light text-center">
          <h3>
            What We Believe <InfoCircle />
          </h3>
        </Col>
      </Row>
      <Row className="bg-secondary">
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About God <Sun className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that there is one, and only one living and true God,
                an infinite intelligent Spirit, whose name is JEHOVAH, the Maker
                and supreme Ruler of heaven and earth; inexpressibly glorious in
                holiness, and worthy of all possible honor, confidence and love;
                that in the unity of the Godhead there are three persons, the
                Father, the Son, and the Holy Spirit; equal in every divine
                perfection and executing distinct but harmonious offices in the
                great work of redemption.
                <br />
                <br />
                <i className="small">
                  John 4:24, Psalms 83:18, Hebrews 3:4, Romans 1:20, Jerimiah
                  10:10, Exodus 15:11, Psalms 147:5, Isaiah 6:3, 1 Peter
                  1:15-16, Revelations 4:6-8, Mark 12:30, Revelations 4:11,
                  Matthew 10:37, Jerimiah 2:12-13, Matthew 28:19, John 15:26, 1
                  Corinthians 12:4-6, 1 John 5:7, John 10:30, John 5:17, John
                  14:23, John 17:5&10, Acts 5:3-4, 1 Cor 2:10-11, Philippians
                  2:5-6, Ephesians 2:18, 2 Corinthians 13:14, Revelations 1:4-5
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About Jesus Christ <Sunrise className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Jesus Christ is the Son of God. He is co-equal with the Father.
                He is fully God and fully man. Jesus lived a sinless life as a
                human and offered Himself as the perfect sacrifice for the sins
                of His people by dying a substitutionary death on a cross. He
                arose from the dead after three days to demonstrate His power
                over sin and death. He ascended to Heaven’s glory and will
                return again someday to earth to reign as King of Kings and Lord
                of Lords.
                <br />
                <br />
                <i className="small">
                  Matthew 1:22, 23, Isaiah 9:6, John 1:1-5, 14:10-30, Hebrews
                  4:14,15, 1 Corinthians 15:3,4, Romans 1:3,4, Acts 1:9-11, 1
                  Timothy 6:14,15, Titus 2:13
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About the Holy Spirit <Sunset className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The Holy Spirit is co-equal with the Father and the Son of God.
                He makes men aware of their sin and enables them to see their
                need to be rescued from the wrath of God by Jesus Christ. He
                also lives in every Christian from the moment of salvation. He
                provides the Christian with power for living, understanding of
                spiritual truth, and guidance in doing what is right. As
                Christians, we seek to live under His control daily.
                <br />
                <br />
                <i className="small">
                  2 Corinthians 3:17, John 16:7-13, 14:16,17, Acts 1:8, 1
                  Corinthians 2:12, 3:16, Ephesians 1:13, Galatians 5:25,
                  Ephesians 5:18
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About the Bible <Book className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that the Holy Bible was written by men divinely
                inspired, and is a perfect treasure of heavenly instruction;
                that it has God for its author, salvation for its end, and truth
                without any mixture of error for its matter, that it reveals the
                principles by which God will judge us; and therefore is, and
                shall remain to the end of the world, the true center of
                Christian union , and the supreme standard by which all human
                conduct, creeds, and opinions should be tried.
                <br />
                <br />
                <i className="small">
                  2 Timothy 3:16-17, 2 Timothy 3:15, Proverbs 30:5-6, Romans
                  2:12, Philippians 3:16, 1 John 4:1
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="bg-secondary">
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About Human Beings <Person className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that man was created in holiness, under the law of
                his Maker, but by voluntary transgression fell from that holy
                and happy state; in consequence of which all mankind are now
                sinners, not by constraint but choice; being by nature utterly
                void of that holiness required by the law of God, positively
                inclined to evil; and therefore under just condemnation to
                eternal ruin, without defense or excuse.
                <br />
                <br />
                <i className="small">
                  Genisis 1:27, Genisis 1:31, Ecclesiastes 7:29, Acts 17:26-29,
                  Genisis 2:16-17, Genisis 3:6-24, Romans 5:12, Romans 5:15-19,
                  Psalms 51:5, Romans 8:7, Isaiah 53:6, Genisis 6:12, Romans
                  3:9-18, Ephesians 2:1-3, Romans 1:18,32, Romans 2:1-16,
                  Galatians 3:10, Matthew 20:15, Ezekiel 18:19-20, Romans 1:20,
                  Romans 3:19, Galatians 3:22
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About Salvation <Gift className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that the salvation of sinners is wholly of grace;
                through the Mediatorial offices of the Son of God; who by the
                appointment of the Father freely took upon him our nature, yet
                without sin; honored the divine law by his personal obedience,
                and by his death made a full atonement for our sins; that having
                risen from the dead, he is now enthroned in heaven; and uniting
                in his wonderful person the tenderest sympathies with divine
                perfections, he is every way qualified to be a suitable, a
                compassionate, and an all-sufficient Savior.
                <br />
                <br />
                <i className="small">
                  Ephesians 2:3, Matthew 18:11, 1 John 4:10, 1 Corinthians
                  3:5-7, Acts 15:11, John 3:16, John 1:1-14, Hebrews 4:14,
                  Hebrews 12-24, Philippians 2:9&14, 2 Corinthians 5:21, Isaiah
                  42:21, Philippians 2:8, Galatians 4:4-5, Romans 3:21, Isaiah
                  53:4-5, Matthew 20:28, Romans 4:25, Romans 3:21-26, 1 John
                  2:3, 1 Corinthians 15:1-3, Hebrews 9:13-15, Hebrews 1:8,
                  Hebrews 1:3, Colossians 3:1-4, Hebrews 7:25, Colossians 2:18,
                  Hebrews 7:26, Psalms 89:19, Psalms34
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About a Gospel Church <House className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that a visible church of Christ is a congregation of
                baptized believers, associated by covenant in the faith and
                fellowship of the gospel; observing the ordinances of Christ;
                governed by his laws; and exercising the gifts, rights, and
                privileges invested in them by his word; that its only
                scriptural officers are bishops or pastors and deacons whose
                qualifications, claims and duties are defined in the Epistles to
                Timothy and Titus.
                <br />
                <br />
                <i className="small">
                  {" "}
                  1 Corinthians 1:1-3, Matthew 18:17, Acts 5:11, Acts 8:1, Acts
                  11:21-23, 1 Corinthians 4:17, 1 Corinthians 14:23, 3 John 9, 1
                  Timothy 3:5, Acts 2:41-42, 2 Corinthians 8:5, Acts 2:47, 1
                  Corinthians 5:12-13, 1 Corinthians 11:2, 2 Thessalonians 3:6,
                  Romans 16:17-20, 1 Corinthians 11:23-24, Matthew 18:15-20, 1
                  Corinthians 5:6, 2 Corinthians 2:17, 1 Corinthians 4:17,
                  Matthew 28:20, John 14:15, John 15:12, 1 John 14:21, 1
                  Thessalonians 4:2, 2 John 6, Galatians 6:2, Ephesians 4:7, 1
                  Corinthians 14:12, Philippians 1:1, Acts 14:23, Acts 15:22, 1
                  Timothy 3, Titus 1
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">
                About Eternity <Hourglass className="text-info" />
              </h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We believe that the end of the world is approaching; that at the
                Last Day Christ will descend from heaven, and raise the dead
                from the grave to final retribution; that a solemn separation
                will then take place; that the wicked will be adjudged to
                endless punishment, and the righteous to endless joy; and that
                this judgment will fix forever the final state of men in heaven
                or hell, on principles of righteousness.
                <br />
                <br />
                <i className="small">
                  1 Peter 4:7, 1 Corinthians 7:29-31, Hebrews 1:10-12, Matthew
                  24:35, 1 John 2:17, Matthew 28:20, Matthew 13:39-40, 2 Peter
                  3:3-13, Acts 1:11, Revelations 1:7, Hebrews 9:28, Acts 3:21, 1
                  Thessalonians 4:13-18, 1 Thessalonians 5:1-11, Acts 24:15, 1
                  Corinthians 15:12-58, Luke 14:14, Daniel 12:2 John 5:28-29,
                  John 6:40, John 11:25-26, 2 Timothy 1:10, Acts 10:42, Matthew
                  13:49, Matthew 13:37-43, Matthew 24:30-31, Matthew 25:31-46,
                  Revelations 22:11, 1 Corinthians 6:9-10, Mark 9:43-48, 2 Peter
                  2:9, Jude 7, Philippians 3:19, Romans 6:23, 2 Corinthians
                  5:10-11, John 4:36, 2 Corinthians 4:18, Romans 3:5-6, 2
                  Thessalonians 1:6-12, Hebrews 6:1-2, 1 Corinthians 4:5, Acts
                  17:31, Romans 2:2-16, Revelations 20:11-12, 1 John 2:28, 1
                  John 4:17, 2 Peter 3:11-12
                </i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
