---
id: 12
trl: medium
category: EUCP data and products
title: Representation and identification of 3 historic "Heavy Precipitation Events"
author: S. Muller, et al., International Centre for Theoretical Physics (ICTP)
thumbnail: "intro.png"
---

:::Chapter{headline="Introduction" image="intro.png"}
## Introduction
Thunderstorms are among the most fascinating weather phenomena. They are
characterized by lightning and thunder, cause strong wind gusts and typically
they bring intense rain. In this way the most severe thunderstorms can be
perceived as heavy precipitation events (HPEs). We here will present a
methodology that, upon objective criteria, identifies HPEs in
convection-permitting observations and numerical models.

Flash floods rank among the most severe hazards caused by weather extremes.
Typically the precipitation events have a strong convective character, are
relatively small in spatial scale and short-lived. Thus it is challenging to
accurately forecast them and to represent them in climate models with coarse
grid spacing.
:::

:::Chapter{headline="Motivation" image="motivation.png"}
## Motivation
Regional Climate Models integrated on convection permitting grids (dx<=4km;
cpRCMs) improve the representation of precipitation extremes, as shown by
[Pichelli et al.
(2021)](https://link.springer.com/article/10.1007/s00382-021-05657-4), e.g. in
their Figure 3. However, information about the properties of the events, causing
these extremes, is not yielded.
:::

:::Chapter{headline="Tracking algorithms" image="algorithms.png"}
## Tracking algorithms
Transform the problem from the Eulerian into the Lagrangian frame of reference
and provide valuable information about the heavy precipitation events
themselves. The schematic shows the Intensity in precipitation on the y-axis and
the scale of events on the x-axis. In this way we identify here convective
phenomena sorted by their typical scales and intensity.

Trackers in principle work the following: first a threshold is imposed to
precipition rate (prTH), second grid cells are clustered in space and time to
form objects, and third all objects that are smaller than a minimal volume
(minvol) are dismissed.

We here apply a well-established tracker (MET MODE-TD, see
https://dtcenter.org/met-online-tutorial-metv8-0/mode-time-domain) on a
composite of high-resolution observations and two cpRCMs. With this we both
demonstrate the capability of convection-permitting resolutions and the
usefulness of the tracker.

:::Chapter{headline="Carrara, Italy" image="carrara.png"}
## Carrara, Italy, in September 2003
This HP and flash flood event is summarized on Italian Wikipedia:
https://it.wikipedia.org/wiki/Alluvione_di_Carrara_del_2003. The region was
affected by torrential rain: ”in about two and a half hours 200 mm of rain was
falling”. It may as well be described as a landfalling event, hot and humid air
from the Mediterranean sea, the tense south-western flow and the orography of
upper Tuscany, were among the triggers that played a major role.

The tracker identifies the event in the observations and attributes fitting
properties: It is short-lived, of small scale and intense.

Also in a cpRCM such events may be well-represented, as indicated.
:::

:::Chapter{headline="Gard, France" image="gard.png"}
## Gard, France, in September 2002
This event is documented in detail by [Delrieu et al.,2005](https://doi.org/10.1175/JHM-400.1).
A landfalling mesoscale convective system remained stationary for almost two
days, trapped by the orography. It brough horrendous amounts of rainfall and
caused wide-spread flooding.

It is well-represented in the observations on the left. Our tracker identifies
it and describes it correctly with a duration of 32 hours, a high intensity and
a large scale and total precipitation amount. Also in a cpRCM such events are
presented and can be identified.
:::

:::Chapter{headline="Western Germany" image="germany.png"}
## Western Germany, 2016/05/26-2016/06/09
A stationary synoptic weather pattern, characterized by a ridge stretching from
Great Britain to Scandinavia, caused a blocking situation. The pressure gradient
and the resulting wind speed in the lower troposphere were very weak.
Consequently, thunderstorms were almost stationary, resulting in large
precipitation accumulations in local areas.

The tracker identifies a multitude of precipitation events in the observations.
:::

:::Chapter{headline="Conclusions" image="conclusion.png"}
## Conclusions
Through the application of trackers valuable information about the events
causing hazards like flash floods can be obtained. Here statistics obtained from
9 year-periods of an observational dataset, and two cpRCM ensembles, one driven
by reanalysis ("evaluation") and one driven by CMIP5-GCMs are presented. On left
we find properties describing the scale of the HPEs and on the right properties
that describe their intensity. In this way models can be evluated against
observations.

Eventually the same can be done for climate projections, promising valuable
information about how HPEs are going to change in a future warmer climate.

Models and Observations provided through the project CORDEX-FPSCONV:
https://www.hymex.org/cordexfps-convection/wiki/doku.php?id=Home

References:

[Pichelli, E., Coppola, E., Sobolowski, S., Ban, N., Giorgi, F., Stocchi, P.,
... & Vergara-Temprado, J. (2021). The first multi-model ensemble of regional
climate simulations at kilometer-scale resolution part 2: historical and future
simulations of precipitation. Climate Dynamics, 56(11),
3581-3602](https://link.springer.com/article/10.1007/s00382-021-05657-4).

[Delrieu, G., Nicol, J., Yates, E., Kirstetter, P. E., Creutin, J. D., Anquetin,
S., ... & Wobrock, W. (2005). The catastrophic flash-flood event of 8–9
September 2002 in the Gard Region, France: a first case study for the
Cévennes–Vivarais Mediterranean Hydrometeorological Observatory. Journal of
hydrometeorology, 6(1), 34-52](https://doi.org/10.1175/JHM-400.1).

[Piper, D., Kunz, M., Ehmele, F., Mohr, S., Mühr, B., Kron, A., & Daniell, J.
(2016). Exceptional sequence of severe thunderstorms and related flash floods in
May and June 2016 in Germany–Part 1: Meteorological background. Natural Hazards
and Earth System Sciences, 16(12),
2835-2850](https://doi.org/10.5194/nhess-16-2835-2016).

Images of flash floods:

- [Gard](https://www.taimsalu.com/uzes/p-uzes/uzes-out/slides/pdg_flood-714.jpg)
- [Carrara](https://it.wikipedia.org/wiki/Alluvione_di_Carrara_del_2003#/media/File:Carrione.jpg)
:::
