---
id: 9
trl: high
category: Application of EUCP innovations
title: Estimating regionalized hydrological impacts of climate change over Europe
author: F. Sperna Weiland et al., Deltares
thumbnail: panel_1.png
---
:::Chapter{headline="Constructing a multi-model ensemble" image="panel_1.png"}

The EURO-CORDEX initiative developed an ensemble of Regional Climate Model (RCM)
simulations at a horizontal resolution of ~11 km - in total 20 RCMs were used
here.

This study builds upon a set of readily available European scale hydrological
simulations. The variation between the models provides insights on the influence
of bias-correction, calibration and hydrological model selected.

The project was conducted in a collaboration between project partners IIASA, ETH
Zürich, Deltares and end-user JRC.

Three hydrological models were selected:

1. **LISFLOOD** from JRC, the model is calibrated and the CORDEX data is
   bias-corrected
2. **CWatM** from IIASA, the model is calibrated on a regional scale, no
   bias-correction is applied
3. **wflow_sbm**, the model is parameterized based on soil, land use and
   vegetation characteristics, no bias-correction is applied

Changes in discharge are assessed between the period 1981-2010 and 2031-2060 for
RCP8p5.
:::

:::Chapter{headline="9 river basins with different characteristics" image="panel_2.png"}

- Past studies indicated future wetter conditions for Northern Europe and drier
  conditions for Southern Europe.
- Discharge changes will likely depend on climatological conditions and
  catchment characteristics
- The discharge response to rainfall changes is non linear and thus requires
- modelling
:::


:::Chapter{headline="Historical discharge regimes" image="panel_3_rearranged.png"}
- Each column represents simulations run by a different model
- The LISFLOOD simulations match the observations (in black) best. This is a
  result of bias-correction and calibration
- The similarity between CWatM and Wflow is larger. There is a wide spread
  between the different ensemble members because no bias-correction was applied
- Bias-correction does improve the historical simulated flows, in the last
  months of EUCP we are exploring whether it does not disturb the change
  signal too much.
:::

:::Chapter{headline="Projected changes - minimum flows" image="projected_changes.png"}
- There are clear indications for decreases in minimum flow in Southern European
  basins and increases in Northern basins.
- The consensus between the different hydrological models and climate models is
  large for the Northern basins (Glomma, Angermanalven) and the Southern basins
  (Ebro and Tanaro)
- For the Central European basins the signal is mixed and the choice of
  hydrological model and RCM does influence the impact estimation.
- The variation between models indicates the need to consider an ensemble of
  models and to account for uncertainties following and adaptive approach.
:::

:::Chapter{headline="Performance-based weighting" image="performance_weighting.png"}
Performance based weighting is used to obtain a more robust change signal from
the ensemble of future projections.

Projected changes are displayed for weighted change in annual mean discharge
(mean Q), annual maximum discharge (maxQ) and 7 day minimum discharge (NM7Q)

Two weighting methods have been applied:

  * **ClimWIP**: Climate model Weighting by Independence and Performance. This
    method evaluates the historical performance of GCMs and their independence.
    Focus of the weighting was on meteorological variables
  * **REA**: Reliability Ensemble Averaging. This method evaluates the
    historical performance of the models and the distance of its change
    projections to the future projected ensemble weighted change. Focus of the
    weighting was on river discharges near the outlet of the basin.

For part of the basins the influence of the weighting was limited. There is
little difference between the weighted and non-weigthed ensemble mean change.

For other basins the REA method deviates from the other change projections. We
assume there is a strong influence of the relatively large historical bias of
the RCM based simulations from observations. A single RCM with the smallest
historical bias is highly favored by the method.
:::

:::Chapter{headline="More information" image="panel_6.png"}
# Further reading

[Sperna Weiland F.C., R.F. Visser, P. Greve, B. Bisselin, L. Brunner, A.H.
Weerts, Frontiers in Water, 3, 143, doi:
10.3389/frwa.2021.713537](https://doi.org/10.3389/frwa.2021.713537)
:::
