// @flow

import React from 'react'

type ProfileProps = {
  avatar: string,
  pseudo: string,
  age: string,
}

const Profile = ({ avatar, pseudo, age }: ProfileProps) => (
  <section className="profile">
    <div className="profile-avatar profile-col profile-col1">
      <img alt="avatar" src={avatar} />
    </div>
    <div className="profile-infos profile-col profile-col2">
      <p>
        Pseudo:
        {pseudo}
      </p>
      <p>
        Age:
        {age}
      </p>
    </div>
  </section>
)

export default Profile
