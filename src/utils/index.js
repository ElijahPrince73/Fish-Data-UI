  const groupByRegion = (data) => {
    return data.reduce((group, region) => {
      const { NOAAFisheriesRegion } = region;
      group[NOAAFisheriesRegion] = group[NOAAFisheriesRegion] ?? [];
      group[NOAAFisheriesRegion].push(region);

      return group;
    }, {});
  }

  const findAverages = (region, data) => {
    const average = region.reduce((total, next) => {
      const value = next[data] !== null ? next[data].replace(/[^\d.-]/g, '') : 0

      return total + Number(value)
    }, 0) / region.length

    return average.toFixed(1)
  }

export { findAverages, groupByRegion }