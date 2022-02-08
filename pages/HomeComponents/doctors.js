import React, { useState } from "react";
import Title from "../ResusableComponents/Title";
import PopOpen from "./PopOpen";


const Doctors = () => {
  const [providers] = useState([
    {
      headshot:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      altText: "Jane Doe's Headshot",
      email: 'email@gmail.com',
      name: "Jane Doe",
      certifications: ["PHD", "HSPP"],
      position: "Clinical Psychologist",
      specialties: "ADHD & BPD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
    },
    {
        headshot:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        altText: "Jane Doe's Headshot",
        email: 'email@gmail.com',
        name: "Jane Doe",
        certifications: ["PHD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "ADHD & BPD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
      },
      {
        headshot:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        altText: "Jane Doe's Headshot",
        email: 'email@gmail.com',
        name: "Jane Doe",
        certifications: ["PHD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "ADHD & BPD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
      },
      {
        headshot:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        altText: "Jane Doe's Headshot",
        email: 'email@gmail.com',
        name: "Jane Doe",
        certifications: ["PHD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "ADHD & BPD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
      },
      {
        headshot:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        altText: "Jane Doe's Headshot",
        email: 'email@gmail.com',
        name: "Jane Doe",
        certifications: ["PHD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "ADHD & BPD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
      },
      {
        headshot:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        altText: "Jane Doe's Headshot",
        email: 'email@gmail.com',
        name: "Jane Doe",
        certifications: ["PHD", "HSPP"],
        position: "Clinical Psychologist",
        specialties: "ADHD & BPD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nisl scelerisque, viverra metus porttitor, varius augue. Donec imperdiet dictum nunc. Nulla facilisi. Nullam et faucibus erat. Integer eget dolor porta, luctus purus eget, mattis dui. Donec rutrum orci nec justo mattis sodales. Nullam pellentesque consequat augue, quis vehicula est tristique tempus. In et leo ex. Mauris nunc leo, feugiat sit amet orci eget, sollicitudin vehicula lacus. Aliquam ac sapien quam. Etiam vehicula erat turpis, vel luctus augue laoreet a. Aliquam erat volutpat. Duis et eros nec justo sagittis vulputate quis in eros. Nulla ut volutpat tortor. Nullam luctus sapien ut dolor ullamcorper finibus. Donec volutpat placerat arcu, non eleifend nisi tristique nec. In rutrum venenatis auctor. Vivamus vehicula imperdiet dolor, vel tempor massa molestie vel. Suspendisse scelerisque ligula sed enim imperdiet congue. Aliquam eu est varius, condimentum orci et, maximus turpis.Curabitur lectus dolor, iaculis sit amet dui non, dignissim vestibulum mauris. Suspendisse ac felis ante. Nulla imperdiet nunc congue, dapibus lectus ut, volutpat ipsum. Pellentesque vulputate, nisi et efficitur scelerisque, ex erat egestas tellus, interdum venenatis odio tellus et risus. Aenean nunc quam, elementum eget massa in, venenatis suscipit felis. Aliquam facilisis in augue sit amet rutrum. Donec auctor dolor vel vestibulum ultrices.",
      },
  ]);


  return (
    <div id="providers">
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {providers.map((provider, index) => {
          return (
            <div id="card" key={index}>
                <PopOpen provider={provider} key={index}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
