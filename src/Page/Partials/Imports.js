// imports.js

import React from "react";
import { Dialog, Transition, Listbox, Disclosure, Switch, Popover } from "@headlessui/react";
import Tooltip from "../../Tools/Tooltip";
import Arrow from "../../assets/Svg/arrow";
import InfoIcon from "../../assets/Svg/InfoIcon";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import PencilIcon from "../../assets/Svg/Pencil";
import TrashIcon from "../../assets/Svg/Trash";
import Bookmark from "../../assets/Svg/bookmark";
import Lock from "../../assets/Svg/Lock";
import SearchIcon from "../../assets/Svg/SearchIcon";
import { useState, useEffect, Fragment } from "react";
import MyListbox from "../../Tools/Listbox";
import Data from "../../Data/RecepieData.json";
import { Filter } from "../../assets/Svg/FilterIcon";
import Bell from "../../assets/Svg/Bell";
import CheckIcon from "../../assets/Svg/CheckIcon";
import Logo from "../../assets/Svg/logo.svg";
import HeaderSmartphone from "../../assets/Images/header-smartphone.png";
import ConclusionSmartphone from "../../assets/Images/conclusion-smartphone.png";
import Details1 from "../../assets/Images/details-1.jpg";
import Details2 from "../../assets/Images/details-2.jpg";
import Details3 from "../../assets/Images/details-3.jpg";
import Lightbox from "../../assets/Images/details-lightbox.jpg";
import Testimonial1 from "../../assets/Images/testimonial-1.jpg";
import Testimonial2 from "../../assets/Images/testimonial-2.jpg";
import Testimonial3 from "../../assets/Images/testimonial-3.jpg";
import Testimonial4 from "../../assets/Images/testimonial-4.jpg";
import Testimonial5 from "../../assets/Images/testimonial-5.jpg";
import Testimonial6 from "../../assets/Images/testimonial-6.jpg";
import FeaturesIcon1 from "../../assets/Svg/features-icon-1.svg";
import FeaturesIcon2 from "../../assets/Svg/features-icon-2.svg";
import FeaturesIcon3 from "../../assets/Svg/features-icon-3.svg";
import FeaturesIcon4 from "../../assets/Svg/features-icon-4.svg";
import FeaturesIcon5 from "../../assets/Svg/features-icon-5.svg";
import FeaturesIcon6 from "../../assets/Svg/features-icon-6.svg";
import MyDisclosure from "../../Tools/Disclosure";
import ArticleDetailsLarge from "../../assets/Images/article-details-large.jpg";
import ArticleDetailsSmall from "../../assets/Images/article-details-small.jpg";
import Moon from "../../assets/Svg/moon";
import Sun from "../../assets/Svg/Sun";
import Table from "../../Tools/Table";
import AlbFlag from '../../assets/Images/albania.png'
import UsFlag from '../../assets/Images/usa.png'
 
export {
  React,
  Dialog,
  Transition,
  Tooltip,
  Arrow,
  PencilIcon,
  TrashIcon,
  Bookmark,
  Lock,
  SearchIcon,
  useState,
  useEffect,
  Fragment,
  Logo,
  HeaderSmartphone,
  CheckIcon,
  Bell,
  Filter,
  Data,
  MyListbox,
  ConclusionSmartphone,
  Details1,
  Details2,
  Details3,
  Lightbox,
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  FeaturesIcon1,
  FeaturesIcon2,
  FeaturesIcon3,
  FeaturesIcon4,
  FeaturesIcon5,
  FeaturesIcon6,
  MyDisclosure,
  ArticleDetailsLarge,
  ArticleDetailsSmall,
  Disclosure,
  ChevronUpIcon,
  Listbox,
  Sun,
  Moon,
  Popover,
  Switch,
  Table,
  InfoIcon,
  UsFlag,
  AlbFlag
};