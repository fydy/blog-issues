import { Fragment } from 'react';
import Link from 'next/link';
import getSlug from 'speakingurl';
import moment from 'moment';

import { showPublishedDate, showCommentLabel, showReadingTime } from '../config/data';
import { getReadingTime } from '../config/api';

function PostSlug({ title, label, number }) {
    return (
        <Fragment>
            <Link
                as={`/post/${[getSlug(title), number].join('-')}`}
                href={`/post?number=${number}&slug=${[getSlug(title)]}`}
            >
                <a>{label}</a>
            </Link>

            <style jsx>
                {`
                    a {
                        color: ${label === 'read more' ? '#3832DC' : '#010101'};
                        text-decoration: none;
                    }
                `}
            </style>
        </Fragment>
    );
}

export function Navbar({ labels, isMobileNavOpen, closenavbar, router }) {
    return (
        <div className="top-navbar">
            {isMobileNavOpen && <div className="mobile-navbar-bg" role="presentation" onClick={closenavbar} />}

            <ul className={`${isMobileNavOpen && 'open-navbar'}`}>
                {/* <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="mailto:mddanishyusuf@gmail.com">
                        <a>Need Help❓</a>
                    </Link>
                </li>
            </ul>
            <style jsx>
                {`
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    ul li {
                        display: inline-block;
                        padding: 3px 40px 3px 0px;
                        font-size: 0.9rem;
                        letter-spacing: 1px;
                    }
                    ul li a {
                        color: ${router.asPath === '/' ? '#373737' : '#333'};
                        text-decoration: none;
                        font-weight: 500;
                        border: 2px solid #373737;
                        padding: 4px 8px;
                        border-radius: 4px;
                    }
                    @media screen and (max-width: 700px) {
                        .mobile-navbar-bg {
                            width: 100%;
                            height: 100vh;
                            position: fixed;
                            right: 0;
                            top: 0;
                            background-color: rgba(0, 0, 0, 0.5);
                        }
                        .open-navbar {
                            background-color: #fff;
                            height: 100vh;
                            width: 50%;
                            position: fixed;
                            top: 0;
                            right: 0;
                            display: block;
                            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
                                0px 6px 30px 5px rgba(0, 0, 0, 0.12);
                        }
                        ul {
                            display: none;
                        }
                        .open-navbar li {
                            display: block;
                            padding: 10px;
                            border-bottom: 1px solid #707070;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export function PostCard({ postDetail }) {
    return (
        <div className="post-card">
            <div className="post-label">{postDetail.labels[0].name}</div>
            <div className="post-title">
                <PostSlug title={postDetail.title} label={postDetail.title} number={postDetail.number} />
            </div>
            <div className="post-date">
                {showPublishedDate && `${moment(postDetail.created_at).fromNow()} |`}{' '}
                {showCommentLabel && `${postDetail.comments} comments | `}{' '}
                {showReadingTime && getReadingTime(postDetail.body)}
            </div>
            <div className="post-summary">
                {postDetail.body.substr(0, 300)}{' '}
                <span>
                    <PostSlug title={postDetail.title} number={postDetail.number} label="read more" />
                </span>
            </div>
            <div className="post-title" />
            <style jsx>
                {`
                    @media screen and (min-width: 700px) {
                        .post-card {
                            padding: 60px;
                            width: 70%;
                            margin: 0 auto;
                        }
                    }

                    .post-card {
                        padding: 40px 20px;
                    }
                    .post-label {
                        font-size: 0.7rem;
                        border: 1px solid #707070;
                        display: inline-block;
                        padding: 0px 15px;
                        letter-spacing: 1.5px;
                        border-radius: 3px;
                        font-family: 'Space Mono', monospace;
                    }

                    .post-title {
                        font-size: 1.4rem;
                        line-height: 2rem;
                        padding-top: 10px;
                        font-weight: 700;
                        color: #373737;
                    }

                    .post-date {
                        font-size: 0.8rem;
                        font-weight: 700;
                        padding: 4px 0px;
                        opacity: 0.7;
                    }

                    .post-summary {
                        line-height: 1.6rem;
                        letter-spacing: 1px;
                        font-size: 1rem;
                        margin-top: 5px;
                    }
                    .post-summary span {
                        font-family: 'Space Mono', monospace;
                        color: #3832dc;
                    }
                `}
            </style>
        </div>
    );
}

export function PostCardHome({ postDetail }) {
    return (
        <div className="post-card">
            <div className="post-label">{postDetail.labels[0].name}</div>
            <div className="post-title">
                <PostSlug title={postDetail.title} label={postDetail.title} number={postDetail.number} />
            </div>
            <div className="post-date">
                {showPublishedDate && `${moment(postDetail.created_at).fromNow()} |`}{' '}
                {showReadingTime && getReadingTime(postDetail.body)}
            </div>
            <div className="post-summary">
                {postDetail.body.substr(0, 100)}{' '}
                <span>
                    <PostSlug title={postDetail.title} number={postDetail.number} label="read more" />
                </span>
            </div>
            <div className="post-title" />
            <style jsx>
                {`
                    @media screen and (min-width: 700px) {
                        .post-card {
                            width: 70%;
                            margin: 0 auto;
                        }

                        .post-card {
                            padding: 20px !important;
                        }
                    }

                    @media screen and (max-width: 700px) {
                        .post-card {
                            padding: 20px !important;
                        }
                    }

                    .post-card {
                        padding: 0px;
                    }
                    .post-label {
                        font-size: 0.8rem;
                        border: 1px solid #707070;
                        display: inline-block;
                        padding: 0px 15px;
                        letter-spacing: 1.5px;
                        border-radius: 3px;
                        font-weight: 700;
                        opacity: 0.8;
                    }

                    .post-title {
                        font-size: 1.4rem;
                        line-height: 2rem;
                        padding-top: 10px;
                        font-weight: 700;
                        color: #373737;
                    }

                    .post-date {
                        font-size: 0.8rem;
                        font-weight: 700;
                        padding: 4px 0px;
                        opacity: 0.7;
                    }

                    .post-summary {
                        line-height: 1.4rem;
                        letter-spacing: 1px;
                        font-size: 0.9rem;
                        margin-top: 5px;
                    }
                    .post-summary span {
                        color: #3832dc;
                    }
                `}
            </style>
        </div>
    );
}
