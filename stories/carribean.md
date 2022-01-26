---
id: 1
trl: low
category: EUCP data and products
title: The EUCP Caribbean runs
author: H. de Vries, et al. Royal Netherlands Meteorological Institute (KNMI).
thumbnail: carribean.png
---

:::chapter{headline=Introduction image=carribean.png}
## Caribbean

Many of the regional climate simulations carried out as part of EUCP were
situated over Europe. On explicit request by the EU, EUCP also conducted a
limited number of simulations with very high resolution regional climate models
for a number outer-European domains. One of the domains is the Caribbean, known
for its sunshine and sandy beaches, but also for devastating tropical cyclones,
monster waves and coastal erosion.

## Convection permitting (CP) simulations

The research question addressed here is what very high resolution CPM
simulations could add to the story of climate change in the region, with a
special interest in the wind and precipitation characteristics of tropical
cyclones. Additionally, it could perhaps be used to apply methodology derived
primarily for the European domains, to these other domains. Two other sets of
outer-European CPM simulations were created within EUCP: one for Madeira, and
one for the island of La Réunion. These are not discussed in this presentation.
:::

:::Chapter{headline="Tropical cyclones variability", image="TCvariability.png"}
## Tropical cyclones variability is huge

As the previous slide already showed, there is huge spatial and temporal
variability in the tracks of tropical cyclones. There is a large interannual
variability with some years being relatively quiet and others very active.

Because of finite resources, only a few hurricane seasons could be simulated.
Therefore it made sense to attempt a pseudo-global warming approach, in which
observed hurricane seasons are simulated twice: once with observed (ERA5)
forcing at lateral boundaries, and a second time in which the same seasons are
'futurized' by adding seasonally varying delta-fields obtained from
climate-change experiments (subset of CMIP5).
:::

:::Chapter{headline="Literature" image="literature.png"}
## Existing literature

Existing literature on the subject (CPM simulations of the domain) is not very
abundant yet. The paper by Gutmann et al (2018) found that a Pseudo-Global
Warming (PGW) approach gave satisfying results, with TC having faster maximum
winds, slower storm translation, lower central pressures and higher
precipitation rates. An important remark was that despite the PGW approach,
there was surprisingly large variability between the storms, necessitating the
creation of a large ensemble.

**Gutmann et al. (2018)**: Changes in Hurricanes from a 13-Yr
Convection-Permitting Pseudo-Global Warming Simulation
- **ERA-Interim**. Period 2001-2013 (32 storms).
- **PGW**: Changes from CMIP5
- CPM: WRF@4km. 5440 km (east-west) x 4064km (north-south)

**Key results**: on average faster maximum winds, slower storm translation
speeds, lower central pressures, higher precipitation rates.

Important remark: changes varied substantially between individual storms, and
not all storms were simulated in both simulations!
:::

:::Chapter{headline="Models and strategies" image="strategy.png"}
## Contributing groups/models
Several groups signed up to contribute with CPM (and RCM) simulations.

**CPM**
- KNMI - HCLIM38-AROME (nested in RACMO)
- SMHI - HCLIM38-AROME (direct)
- ICTP - RegCM4-7 (direct)
- GERICS - REMO-NH (direct)

**RCM**
- KNMI - RACMO (1979-2020)
- DMI - HCLIM38-AROME 12km(!)

## Simulation strategy
Simulation strategy was to come up with a top-10 list of hurricane seasons and
simulate these using ERA5 as boundary and initial conditions (REF). A second set
of simulations (PGW) was then created, by adding CMIP5-derived delta fields to
the ERA5 boundary conditions. In this way, entire seasons were 'futurized'.

Note that within the domain, the models generate their own internal dynamics so
it is not guaranteed that each REF and PGW run gives the same number of tropical
cyclones. KNMI ran a third set of simulations using a uniform temperature
increase.
:::

:::Chapter{headline="Top-10 list of seasons" image="top10.png"}
## Top-10 list
The top-10 list of seasons was created on the basis of the IBTrACS database and
a couple of criteria (see the title of the plot). The approximate internal
domain is shown, as well as the named hurricanes occurring in the top-10
seasons.
:::

:::Chapter{headline="First results of Irma" image="irma.gif"}
## First results
First result is of Irma, the big tropical cyclone of 2017. Shown is the
simulation of the hourly windfield. The black line is the observed track from
the IBTrACS database. As you can see the TC is well resolved (clear eye
formation) and follows the observed track rather accurately, making it quite
suitable for impact studies in e.g. WP4. At the end of the simulation period,
the next tropical cyclone (Jose) is just appearing.
:::

:::Chapter{headline="Poor man's tracking" image="tracking.png"}
## Poor man's tracking
As a second example we count the number of hours with hurricane-force windspeeds
in each of the models in the 2017 hurricane season. This could be considered as
a poor man's tracking approach. Although most models resolve the TC from 2017,
there is still some model spread (remember the lateral forcing is all
identical).

Note that the models labelled SMHI and KNMI are identical (HCLIM-AROME), but
that KNMI uses RACMO as the intermediate model, whereas SMHI uses a direct
approach. [SMHI and DMI are also the same model, but their resolutions differ].
Track coherence seems weakest in GERICS (REMO-NH model).
:::

:::Chapter{headline="PGW perturbations" image="trackingPGW.png"}
## Poor man's tracking with PGW perturbations added
In the second experiment, the same seasons were simulated with PGW perturbations
added. Again we see considerable differences, although some of the major
hurricanes still feature on the map. But clearly it is not guaranteed that each
TC get more intense under PGW. To the contrary, most of the TC shown here seem
to weaken (except in the simulations by GERICS (REMO-NH). Also the tracks are
not identical, implying that studying impact changes is not straightforward,
unless we aggregate / pool results. A similar pattern is shown when we use all
years. Many storms weaken, some seem to intensify, and most display small
changes in track location.
:::

:::Chapter{headline="Precipitation" image="precipitation.png"}
## Precipitation
A first glance at the changes in precipitation can be obtained from histograms
of the hourly spatial maximum of the precipitation field, aggregated over all
hours and all years. By looking at the field-maximum we thus discard information
on the size of events. Furthermore, only sea area is considered here.

There are substantial differences between the models yet all show unmistakably a
tendency towards higher maxima in future. A more complete analysis of the
distribution, that includes the size of events is in preparation.
:::

:::Chapter{headline="Conclusions" image="summary.png"}
## Summary and conclusions

EUCP Caribbean CPM and RCM simulations: ERA5 + PGW, focus on Hurricane season.
Top-10 seasons according to criteria. Includes 2017 (Irma). Data will be used by
WP4 for eg., storm surge modelling.

Preliminary results: wind speed and precipitation. Robust increase in
precipitation maxima, wind speed change less obvious. Poor man’s tracking: Not
all tropical cyclones reproduced in REF and PGW: Optimal conditions in
present-day climate not necessarily more favorable for development in future
climate. Further analysis necessary.

Still to do:
- More extended analysis, including pooling of results.
- Comparison to observations
- Impact modelling by WP4: storm surges
- Discussion of relevance of PGW versus GCM-forced.

## Reference

[Gutmann, E. D. et al. Changes in hurricanes from a 13-Yr convection-permitting
pseudo- global warming simulation. J. Clim. 31, 3643–3657
(2018).](https://journals.ametsoc.org/view/journals/clim/31/9/jcli-d-17-0391.1.xml?tab_body=pdf)

[Lenderink, G. et al. Systematic increases in the thermodynamic response of
hourly precipitation extremes in an idealized warming experiment with a
convection-permitting climate model. Environ. Res. Lett. 14,
(2019).](https://iopscience.iop.org/article/10.1088/1748-9326/ab214a/meta)

[Liu, C. et al. Continental-scale convection-permitting modeling of the current
and future climate of North America. Clim. Dyn. 49, 71–95
(2017).](https://link.springer.com/article/10.1007/s00382-016-3327-9)
:::
