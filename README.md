﻿Table of Contents
=================

* [1\. 需求背景 (Why)](#1-%E9%9C%80%E6%B1%82%E8%83%8C%E6%99%AF-why)
  * [1\.1 关于“竞品”](#11-%E5%85%B3%E4%BA%8E%E7%AB%9E%E5%93%81)
* [2\.  需求目标(What)](#2--%E9%9C%80%E6%B1%82%E7%9B%AE%E6%A0%87what)
  * [2\.1 报名模块](#21-%E6%8A%A5%E5%90%8D%E6%A8%A1%E5%9D%97)
  * [2\.2 绘制Agenda模块](#22-%E7%BB%98%E5%88%B6agenda%E6%A8%A1%E5%9D%97)
  * [2\.3 会员风采展示模块](#23-%E4%BC%9A%E5%91%98%E9%A3%8E%E9%87%87%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%9D%97)
  * [2\.4 数据分析模块](#24-%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E6%A8%A1%E5%9D%97)
* [3\. 需求实现 (How)](#3-%E9%9C%80%E6%B1%82%E5%AE%9E%E7%8E%B0-how)
* [4\. About me](#4-about-me)
* [参考链接](#%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5)
* [文档修订记录](#%E6%96%87%E6%A1%A3%E4%BF%AE%E8%AE%A2%E8%AE%B0%E5%BD%95)

## 1. 需求背景 (Why)

我们在组织会议过程中，发现`Toastmaster`这个角色经常没有人报名，经过深入调查发现其实在**组织大家报名**和**制作Agenda**这两项最消耗时间。

关于组织报名，我们先后用以下方式：
- 在微信群里报名
- 腾讯在线文档报名

第一种消息容易被冲刷掉。第二种说实在，腾讯文档真的非常难用，每次让我上去填写一个名字我都有点发憷。不知道一向以体验闻名的腾讯为什么在这项上做的如此难用。

关于Agenda制作，从每个人的名字填写，时间计算，核对如果发现不对每个细节都得改过去，是最容易出错的地方，要绘制出一份完善的Agenda相当消耗时间和精力。我自己也曾有过好几次为了绘制Agenda差点迟到的经历。

我觉得俱乐部应该是一个让人放心、开心和省心的地方，而不是让人觉得一旦承担了角色就会带来麻烦的地方。

基于以上这些原因，我尝试去开发一个微信小程序报名+后端自动生成agenda，导出来再直接打印的小程序。

### 1.1 关于“竞品”
 成都有个程序员也开发出了一个微信报名小程序。我们就基于能否自动生成Agenda联系过该作者，作者淡淡的表示，大不了就直接绘制Agenda，一周也就一次，不麻烦。

因此我觉得自己开发一个，算是重复造了前轮子吧。

## 2.  需求目标(What)

### 2.1 报名模块

作为一个**Shining Stars的会员**，我期望能有一个报名的小程序，**`能让我选择角色和演讲者`**。但我选择演讲者的时候，可以自动关联到我的Pathways路径，以及路径对应的Project Objectives. 这样子就能大大方便我报名的方式，且可以和我的Evaluator以及Mentor就本次演讲目标迅速达成共识，免去反复查阅咨询的麻烦。

### 2.2 绘制Agenda模块

作为每次会议的**组织者（Toastamster ）**, 我期望小程序可以提供**`一键生成Agenda功能`**，并且可以分享到微信群让每个member都知道本次会议的安排。这样就能节省我大量的时间和精力，有家有小的推动俱乐部会议和发展。

### 2.3 会员风采展示模块

作为**俱乐部会员**，我们期望能通过一个窗口**`有效的传递出俱乐部内部优秀的会员，热烈的气氛，精彩的会议和户外活动`**，以期达到宣传俱乐部，吸引更多访客的效果。

### 2.4 数据分析模块

作为**俱乐部干事(Club Officers)**, 我们期望有**`能统计出出一段时间内（半年、一年）会员的参会率`**，大家好爱的主题、每个人偏好的角色，以及缺勤率等。这样子我们就能根据每个会员做有针对性的改进。

## 3. 需求实现 (How)

| 阶段 |     时间|   主要功能|
| :-------- | :--------| ------: |
| 第一期|   2020.3 ~ 2020.6|  1.熟悉小程序开发 <br>2.完成微信小程序的报名功能  <br> 3.完成会员等基本信息的初始化 |
|第二期|~~2020.7 ~ 2020.11~~| 1. 完成Agenda的绘制与导出 <br>2. 完成演讲项目与会员关联展示<br> 3. 完成会员风采展示|
|第三期|~~2020.12 ~ 202.3~~ |1. 完成 数据分析 <br>2. 用可视化的方式展示数据  |


## 4. About me
- 我是来自福州**`Shining Stars Toastmasters Club`**的Lee, 是这个俱乐部的创会主席(2016.9--2017.3)。
- 我从2015年初加入头马，2019年3月获得DTM；
- 我曾经是Divsion M 的Area Director (2017-2018)
- 我曾经是一名程序员，后来转去做了产品5年，现在又转回来做开发。

## 参考链接


## 文档修订记录

| 版本号|     变化状态|   简要说明|  日期	|   参与者   |
| :-------- | :--------| :------ |:------ |:------ |
| V0.1|   建立| 项目初建|2020-3-20| Lee|
| V0.2|   新增| 完成小程序组件的学习|2020-4-4| Lee|
| V0.3|   新增| 完成后端API接口的编程|2020-4-10| Lee|
| V0.4|   新增| 完成小程序Tabs、音乐编程； 开始学习Promise编程|2020-4-20| Lee|
| V0.4|   修改| 因为房子装修的原因，暂停编程一个月|2020-5-20| Lee|
| V0.5|   修改| 重新复习小程序编程|2020-6-15| Lee|
|V0.6|增加| 2021年重新开始之前因为装修为断掉的编程|2020-1-1|Lee|
|V0.7|修改|因为这几天忙于窗帘、卫生等事项，还没有正式开始coding|2020-1-4|Lee|


*变化状态：建立，修改，增加，删除
