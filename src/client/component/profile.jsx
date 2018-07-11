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
        {`Pseudo:  ${pseudo}`}
      </p>
      <p>
        Age:
        {' '/* magnifique ! */}
        {age}
      </p>
    </div>
  </section>
)

export default Profile

// <Profile avatar="https://s.gravatar.com/avatar/a45f7f43eb8a85b3c1cdae2b1104660e.jpg" pseudo="damien" age="20" />
