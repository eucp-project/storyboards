---
id: 0
trl: high
category: Application of EUCP innovations
title: Multi-year prediction of drought and heat stress in the wheat sector
author: B. Solaraju-Murali, et al. Barcelona Supercomputing Center.
thumbnail: "img_1.png"
---

:::Chapter{headline="Introduction and Aim" image="img_1.png"}
## Introduction and Aim

Wheat sector is heavily influenced by recent alterations in the frequency and
severity of extreme climate events. There is a growing need of climate
information for effective planning and adaptive actions to the near-term climate
variability and change.

The aim is to assess the forecast quality in predicting the evolution of
multi-year drought and heat stress conditions by using user-relevant
agro-climatic index over global wheat growing region. The considered
agro-climatic index includes Standardized Potential Evapotranspiration Index
(SPEI)  and Heat Magnitude Day Index (HMDI).

## Wheat harvest months
The harvested month is retrieved from the MIRCA2000 dataset. For each grid box,
the forecast quality evaluation of initialized decadal prediction is carried-out
for the months preceding the harvest of wheat on a global spatial scale and
therefore the presented results in this evaluation will correspond to different
times of the year for different regions.
:::

:::Chapter{headline="Data and Methods" image="img_2.png"}
## Data and Methods

Datasets used in this project are:

- NCAR Decadal Prediction Large Ensemble (DPLE): Forecasts that were run by
  explicitly prescribing the contemporaneous state of the climate system at the
  start of the simulation annually.
- Observational reference: JRA-55 for monthly mean temperature and GPCCv2018 for
  precipitation.

Methodology is described in the figure.
:::

:::Chapter{headline="Forecast quality assessment: Prediction skill" image="img_3.png"}
## Forecast quality assessment of SPEI6 and HMDI3: Prediction skill

The probabilistic skill of initialized decadal forecast in predicting multi-year
averaged SPEI6 and HMDI3 is presented for the months preceding the wheat harvest
on a global spatial scale.

Fair Ranked probability skill score (FRPSS) for tercile events of calibrated
SPEI6 (left) and HMDI3  (right) averaged over forecast years 1-5 using decadal
prediction, with respect to the observational climatology during the winter
wheat harvest months for the period 1961-2014.
:::

:::Chapter{headline="Forecast quality assessment: Reliability" image="img_4.png"}
## Forecast quality assessment of SPEI6 and HMDI3: Reliability

The reliability of initialized decadal forecast in predicting multi-year
averaged SPEI6 and HMDI3 over global wheat harvesting region.

This figure shows reliability diagrams (lines) for probabilistic categorical
forecasts (tercile events) of unadjusted and calibrated SPEI6 (top) and HMDI3
(bottom) estimate over Global wheat growing region. The frequency of occurrence
of each bin for each category is shown to the right of the panels.
:::

:::Chapter{headline="Decadal prediction: Map" image="img_5.png"}
## Decadal prediction for wheat sector

An illustration of a potential climate service product for the wheat sector
based on categorical events.

This figure shows high probability of dry conditions (below-normal category of
SPEI6) and heat stress events (above-normal category of HMDI3) over most of the
wheat growing regions for the forecast years 2015-2019.

Multi-year probabilistic calibrated forecast (a, b) and observed (c, d) most
likely tercile category of SPEI6 (left) and HMDI3 (right) for the year 2014-2018
over the wheat harvesting regions that presents positive FRPSS values.
:::

:::Chapter{headline="Decadal prediction: Timeseries" image="img_6.png"}
## Decadal prediction for wheat sector

Here is another illustration of a potential climate service product for the
wheat sector based on categorical events.

Jesi is one of the identified regions by the stakeholders in the EU
H2020-MED-GOLD project to be among the leading regions used for the production
of durum wheat in Italy.

This figure shows time series of multi-year averaged SPEI6 (top) and HMDI3
(bottom) over Jesi, Italy (43.82° N, 13.75° E). The small (large) gray dots
correspond to the ensemble members of the hindcasts (ensemble members mean) for
each start date. The black dots correspond to the observed values. The brown
(blue) and green (red) horizontal lines show its lower and upper observed
terciles of SPEI6 (HMDI3), respectively.
:::

:::Chapter{headline="General conclusions" image="img_7.png"}
## General conclusions

Our findings lead to the general conclusions:

- Initialized decadal predictions hold promise in predicting drought and heat
  stress conditions on a multi-annual timescale.
- Positive probabilistic skill is found for SPEI6 and HMDI3 index, particularly
  over Europe and the Middle Eastern countries during the wheat harvest months.
- Calibration of the indices improves the skill over several regions, which
  presents high negative values.
- Using Attributes (or Reliability) Diagrams, it is evident that Calibration (or
  bias adjustment) of the index is essential for providing trustworthy and
  robust forecasts to the interested end users in the agricultural sector.

## More information

Detailed information is available in the [reference
paper](https://www.nature.com/articles/s41612-021-00189-4).
:::
