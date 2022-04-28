---
id: 10
trl: medium
category: EUCP science and methodologies
title: Sub-selection from ensemble projections
author: T. Palmer et al., MetOffice
thumbnail: "intro_subsampling.png"
---

:::Chapter{headline="Introduction and aim" image="subsampling_motivations.png"}
## Why sub-select from ensemble projections

Climate models represent one of the key datasets to explore potential future
climate impact, vulnerabilities, and risks. However, not all such models are
equally skillful in capturing the climate processes that drive climate
variability and change, particularly at regional scales. There is an interest,
therefore, in assessing the suitability of these models if they are to be used
to underpin or inform decision-making.​

In many applications of ensemble climate projections such as CMIP6 it is
impractical to apply realizations from all 30-50 members, and a smaller subset is
required. Such applications might include climate change impacts studies (for
example hydrological models to explore flood impacts) or dynamical downscaling
with regional climate models.
:::

:::Chapter{headline="Process based assessment criteria" image="example_assessment.png"}
## Process based assessment criteria

Method builds on the approach developed in McSweeney et al.,(2015, 2018)
previously applied to CMIP5. Models are assessed on a range of regional
criteria, including the circulation climatology, distribution of daily storm
track position, the annual cycle of local precipitation and temperature in
European sub-regions.​

**Assessment criteria:**

_Large scale​_

- Large scale circulation​
- Seasonal  Temperature bias ​
- SST bias  ​
- Storm Tracks (see example left)​
- Blocking frequency​
- AMOC​

_Local/regional scale​_

- Regional precipitation​
- Seasonal  Temperature bias ​
:::

:::Chapter{headline="Performance scores" image="example_table.png"}

**Performance Scores** of CMIP6 models for large scale and regional criteria ​

The models were scored against 3 classifications to indicate their performance
for each of the criteria. The classifications were defined for this assessment
as follows: ​

**White – _Satisfactory_**. Some substantial errors may be present but not widespread
or not present in the local region of interest. Location of larger remote errors
are not known to have a downstream impact in the local region of interest.
Captures key characteristics of the criteria spatially or temporarily.​

**Orange – _Unsatisfactory_** .Substantial errors in remote regions where downstream
effects could be expected to impact on the reliability of regional information
and/or present in the local region of interest​

**Red  - _inadequate/ excluded_**. Large widespread errors to the extent that the
model is unable to represent the present-day climatology in a useful way and
future projections by the model cannot be interpreted in a meaningful way​

**Assessment summary table​**

The assessment for each of the CMIP6 models was collated into a table, with the
classification for each of the criteria, where the relevant data and/or analysis
were available. This creates a summary of each model's performance against a
range of criteria designed to assess the representation of processes by the
model that are essential for the prediction of the European climate. ​
:::

:::Chapter{headline="Model independence​" image="clusters.png"}
## Model Independence​

18 models remain after filtering for performance. We can further sample these to
offer smaller subsets (~5-7) which are still representative.​

- Some models are closely related to each other due to shared components, the
  degree of interdependence is measured using the ClimWIP method for the
  comparison of model independence (Brunner et al., 2020). ​

- Top left - shows the independence matrix for the different models, this was
  used to create clusters of models that had dependencies (see table below). ​

- Models with question marks indicate that these are models that while not
  inadequate may not be preferred for sub-selection. ​

- Models that did not fall within a cluster: ​

  - BCC-CSM2-MR​
  - MRI-ESM2-0​
  - MPI-ESM2-HR​
:::

:::Chapter{headline="Example model sub-selection" image="example_model_subselection.png"}
## Example model sub-selection based on performance assessment and model independence.

Example of model sub-selection for an ensemble of 5 -7 CMIP6 models (shown in
blue), as may be required for downscaling or hydrological assessments. ​

Figure (left), shows where the selected models lie within the range of future
(2081-2100) temperature and precipitation projections (ssp585). ​

Models found be inadequate for large-scale assessment criteria are shown in red.

Models are removed (due to being classed inadequate) throughout the projection
range, but overall more models with a modest temperature response are removed. ​
:::

:::Chapter{headline="Applications" image="applications.png"}
## Applications of assessment information for users.​

The information in the assessment table can be applied by users to create their
own bespoke model sub-selection according their requirements. ​

This could be used in combination with other tools such as
[https://gcmeval.met.no](https://gcmeval.met.no) (see illustration on left), to
pick models with acceptable performance in the required criteria that capture
the ensemble range. ​

Alternatively, we also present a list of models that is a sub-selection of the
CMIP6 ensemble that was found to be acceptable for the main European regions: ​

- ACCESS-CM2​
- BCC-CSM2-MR​
- CESM2​
- CESM2-WACCM​
- CNRM-CM6-1​
- CNRM-ESM2-1​
- CNRM-CM6-1​
- EC-EARTH3​
- EC-EARTH-Veg​
- GFDL-CM4​
- GFDL-ESM4​
- HadGEM-GC31-LL​
- HadGEM-GC31-MM​
- MPI-ESM1-2-HR​
- MRI-ESM2-0​
- UKESM1-0-LL​
:::
