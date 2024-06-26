import Head from "next/head";
import Footer from "./Footer";
import styles from "@/styles/Page.module.css";
import Header from "./Header";
import { useRouter } from 'next/router'

import React, { useState } from "react";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import Link from "next/link";

function AdminLayout({ children }) {
  const { data: session } = useSession();
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hi! Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>

      <div className={`container-fluid ${styles.background} `}>
        <div className="row flex"  >
          <div
            // className={`col-sm-12 col-md-9 col-xl-9 py-3 pt-5 ${styles.main}`}
            className={`py-3 pt-3 ${styles.main}`}     
          >
            

            <div className="d-flex mx-7 pb-3" style={{alignItems: "center", justifyContent: "center"}}>
              <Link href={`/admin/home`} className="btn btn-success me-3 px-3">
                Home
              </Link>
              <Link href={`/admin/donations`} className="btn btn-success me-3 px-3">
                View Donations
              </Link>
              {session ? (
                <div
                  className="btn btn-success px-3"
                  aria-current="page"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </div>
              ) : (
                <div
                  className="btn btn-success px-3"
                  aria-current="page"
                  onClick={() => signIn()}
                >
                  Login
                </div>
              )}
            </div>

            {children}
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminLayout;